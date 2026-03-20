import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, of, tap } from 'rxjs';
import { AuthResponse, ForgotPasswordPayload, LoginPayload, RegisterPayload, User } from '../models/user.model';
import { SessionService } from './session.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly sessionService = inject(SessionService);
  private readonly appServer = this.resolveAppServerUrl();

  private readonly storageKey = 'brapci_user';
  private readonly userSubject = new BehaviorSubject<User | null>(null);

  readonly currentUser$ = this.userSubject.asObservable();

  private resolveAppServerUrl(): string {
    const globalScope = globalThis as {
      process?: { env?: Record<string, string | undefined> };
      __env?: Record<string, string | undefined>;
    };

    const rawServer =
      globalScope.process?.env?.['app.server'] ??
      globalScope.__env?.['app.server'] ??
      '';

    return rawServer.replace(/\/$/, '');
  }

  private buildAuthUrl(path: string): string {
    return this.appServer ? `${this.appServer}${path}` : path;
  }

  getThemePreference(): 'light' | 'dark' | null {
    const current = this.userSubject.value;
    if (current?.themePreference) {
      return current.themePreference;
    }

    const cached = this.sessionService.getSessionValue(this.storageKey);
    if (!cached) {
      return null;
    }

    try {
      const parsed = JSON.parse(cached) as User;
      return parsed.themePreference ?? null;
    } catch {
      return null;
    }
  }

  updateThemePreference(theme: 'light' | 'dark'): void {
    const current = this.userSubject.value;
    if (!current) {
      return;
    }

    const updatedUser: User = {
      ...current,
      themePreference: theme
    };

    this.userSubject.next(updatedUser);
    this.sessionService.setSessionValue(this.storageKey, JSON.stringify(updatedUser));
  }

  loadUserFromSession(): void {
    const cached = this.sessionService.getSessionValue(this.storageKey);

    if (cached) {
      this.userSubject.next(JSON.parse(cached) as User);
    }
  }

  checkSession(): Observable<User | null> {
    return this.http.get<AuthResponse>(this.buildAuthUrl('/auth/me')).pipe(
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
    let url = '/auth/login';
    if (payload.username.includes('@')) {
      url = '/auth/login-email';
    }
    return this.http.post<AuthResponse>(this.buildAuthUrl(url), payload).pipe(
      map((response) => response.user),
      tap((user) => {
        this.userSubject.next(user);

        if (user) {
          this.sessionService.setSessionValue(this.storageKey, JSON.stringify(user));
        }
      }),
      catchError(() => of(null)),
    );
  }

  register(payload: RegisterPayload): Observable<User | null> {
    return this.http.post<AuthResponse>(this.buildAuthUrl('/auth/register'), payload).pipe(
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

  resendPassword(payload: ForgotPasswordPayload): Observable<boolean> {
    return this.http.post<{ success?: boolean }>(this.buildAuthUrl('/auth/forgot-password'), payload).pipe(
      map((response) => response.success ?? true),
      catchError(() => of(false))
    );
  }

  logout(): Observable<void> {
    return this.http.post<void>(this.buildAuthUrl('/auth/logout'), {}).pipe(
      tap(() => {
        this.userSubject.next(null);
        this.sessionService.clearSessionValue(this.storageKey);
      })
    );
  }
}
