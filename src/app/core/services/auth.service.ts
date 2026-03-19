import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, of, tap } from 'rxjs';
import { AuthResponse, LoginPayload, User } from '../models/user.model';
import { SessionService } from './session.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly sessionService = inject(SessionService);

  private readonly storageKey = 'brapci_user';
  private readonly userSubject = new BehaviorSubject<User | null>(null);

  readonly currentUser$ = this.userSubject.asObservable();

  loadUserFromSession(): void {
    const cached = this.sessionService.getSessionValue(this.storageKey);

    if (cached) {
      this.userSubject.next(JSON.parse(cached) as User);
    }
  }

  checkSession(): Observable<User | null> {
    return this.http.get<AuthResponse>('/auth/me').pipe(
      map((response) => response.user),
      tap((user) => {
        this.userSubject.next(user);

        if (user) {
          this.sessionService.setSessionValue(this.storageKey, JSON.stringify(user));
        } else {
          this.sessionService.clearSessionValue(this.storageKey);
        }
      }),
      catchError(() => {
        this.userSubject.next(null);
        this.sessionService.clearSessionValue(this.storageKey);
        return of(null);
      })
    );
  }

  login(payload: LoginPayload): Observable<User | null> {
    return this.http.post<AuthResponse>('/auth/login', payload).pipe(
      map((response) => response.user),
      tap((user) => {
        this.userSubject.next(user);

        if (user) {
          this.sessionService.setSessionValue(this.storageKey, JSON.stringify(user));
        }
      }),
      catchError(() => of(null))
    );
  }

  logout(): Observable<void> {
    return this.http.post<void>('/auth/logout', {}).pipe(
      tap(() => {
        this.userSubject.next(null);
        this.sessionService.clearSessionValue(this.storageKey);
      })
    );
  }
}
