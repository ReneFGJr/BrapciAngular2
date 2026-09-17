import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { AuthResponse, ForgotPasswordPayload, LoginPayload, RegisterPayload, User } from '../models/user.model';
import { SessionService } from './session.service';

type StoredAuthSession = {
  user: User;
  expiresAt: number;
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly sessionService = inject(SessionService);
  private readonly appServer = this.resolveAppServerUrl();
  private readonly legacyApiBaseUrl = 'https://cip.brapci.inf.br/api/';

  private readonly storageKey = 'brapci_user';
  private readonly localStorageKey = 'brapci_user_session';
  private readonly sessionDurationMs = 6 * 60 * 60 * 1000;
  private readonly userSubject = new BehaviorSubject<User | null>(null);

  // Legacy compatibility properties (kept for old callers).
  public user: User | null = null;
  public logged = false;

  readonly currentUser$ = this.userSubject.asObservable();

  private resolveAppServerUrl(): string {
    const globalScope = globalThis as {
      process?: { env?: Record<string, string | undefined> };
      __env?: Record<string, string | undefined>;
    };

    const rawServer =
      globalScope.__env?.['app.server'] ??
      globalScope.process?.env?.['app.server'] ??
      '';

    return rawServer.replace(/\/$/, '');
  }

  private buildAuthUrl(path: string): string {
    return this.appServer ? `${this.appServer}${path}` : path;
  }

  private persistUser(user: User | null, renewSession = false): void {
    this.userSubject.next(user);
    this.user = user;
    this.logged = !!user;

    if (user) {
      this.sessionService.setSessionValue(this.storageKey, JSON.stringify(user));
      this.writeUserToLocalStorage(user, renewSession);
      return;
    }

    this.sessionService.clearSessionValue(this.storageKey);
    this.clearUserFromLocalStorage();
  }

  private getLocalStorage(): Storage | null {
    if (typeof window === 'undefined') {
      return null;
    }

    return window.localStorage;
  }

  private writeUserToLocalStorage(user: User, renewSession: boolean): void {
    const storage = this.getLocalStorage();
    if (!storage) {
      return;
    }

    const existing = renewSession ? null : this.readStoredSessionFromLocalStorage();
    const payload: StoredAuthSession = {
      user,
      expiresAt: existing?.expiresAt ?? Date.now() + this.sessionDurationMs
    };

    storage.setItem(this.localStorageKey, JSON.stringify(payload));
  }

  private clearUserFromLocalStorage(): void {
    const storage = this.getLocalStorage();
    if (!storage) {
      return;
    }

    storage.removeItem(this.localStorageKey);
  }

  private readStoredSessionFromLocalStorage(): StoredAuthSession | null {
    const storage = this.getLocalStorage();
    if (!storage) {
      return null;
    }

    const raw = storage.getItem(this.localStorageKey);
    if (!raw) {
      return null;
    }

    try {
      const parsed = JSON.parse(raw) as Partial<StoredAuthSession>;
      const expiresAt = Number(parsed.expiresAt ?? 0);

      if (!Number.isFinite(expiresAt) || !expiresAt || Date.now() >= expiresAt || !parsed.user) {
        this.clearUserFromLocalStorage();
        return null;
      }

      return {
        user: parsed.user as User,
        expiresAt
      };
    } catch {
      this.clearUserFromLocalStorage();
      return null;
    }
  }

  private readUserFromLocalStorage(): User | null {
    return this.readStoredSessionFromLocalStorage()?.user ?? null;
  }

  private normalizeLegacyUser(raw: unknown): User | null {
    if (!raw || typeof raw !== 'object') {
      return null;
    }

    const data = raw as Record<string, unknown>;
    const idCandidate = Number(data['id'] ?? data['ID'] ?? 0);
    const usernameCandidate = String(data['email'] ?? data['persistent-id'] ?? data['givenName'] ?? '').trim();
    const nameCandidate = String(data['displayName'] ?? data['givenName'] ?? data['user'] ?? '').trim();
    const adminFlag = data['admin'] === true || data['admin'] === 1 || data['admin'] === '1';
    const tokenCandidate = this.extractToken(data);

    return {
      id: Number.isFinite(idCandidate) ? idCandidate : 0,
      username: usernameCandidate || 'legacy-user',
      name: nameCandidate || usernameCandidate || 'Usuario',
      role: adminFlag ? 'admin' : 'user',
      token: tokenCandidate || undefined
    };
  }

  private extractUserFromLoginResponse(response: unknown): User | null {
    if (!response || typeof response !== 'object') {
      return null;
    }

    const authResponse = response as Partial<AuthResponse> & Record<string, unknown>;
    if (authResponse.user && typeof authResponse.user === 'object') {
      const user = authResponse.user as User;
      return { ...user, token: user.token || this.extractToken(authResponse) || undefined };
    }

    if (String(authResponse['status'] ?? '') === '200') {
      return this.normalizeLegacyUser(response);
    }

    return null;
  }

  private extractToken(raw: Record<string, unknown>): string {
    const candidate = raw['token'] ?? raw['access_token'] ?? raw['api_token'] ?? raw['apiToken'] ?? raw['apikey'];
    return typeof candidate === 'string' ? candidate.trim() : '';
  }

  private buildFormData(fields: Record<string, string>): FormData {
    const formData = new FormData();
    Object.entries(fields).forEach(([key, value]) => formData.append(key, value));
    return formData;
  }

  private legacyPost(path: string, fields: Record<string, string>): Observable<unknown> {
    const url = `${this.legacyApiBaseUrl}${path}`;
    return this.http.post<unknown>(url, this.buildFormData(fields)).pipe(
      catchError((error) => {
        console.error(`Erro na chamada ${path}:`, error);
        return throwError(() => error);
      })
    );
  }

  getThemePreference(): 'light' | 'dark' | null {
    const current = this.userSubject.value;
    if (current?.themePreference) {
      return current.themePreference;
    }

    const localUser = this.readUserFromLocalStorage();
    if (localUser?.themePreference) {
      return localUser.themePreference;
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

    this.persistUser(updatedUser);
  }

  loadUserFromSession(): void {
    const localUser = this.readUserFromLocalStorage();
    if (localUser) {
      this.persistUser(localUser);
      return;
    }

    this.persistUser(null);
  }

  checkSession(): Observable<User | null> {
    const localUser = this.readUserFromLocalStorage();
    const verification = localUser?.token
      ? this.loginOauthHttp(localUser.token).pipe(map((response) => {
          // A deployment without this provider reports HTTP 200 with an application error.
          // Distinguish service unavailability from an explicit invalid session.
          const body = response && typeof response === 'object'
            ? response as Record<string, unknown> : null;
          if (String(body?.['status']) === '500' && body?.['message'] === 'Unsupported provider') {
            throw new Error('Session validation provider is unavailable');
          }
          return this.extractUserFromLoginResponse(response);
        }))
      : this.http.get<AuthResponse>(this.buildAuthUrl('/auth/me')).pipe(map((response) => response.user));

    return verification.pipe(
      map((user) => user && localUser?.themePreference
        ? { ...user, themePreference: localUser.themePreference } : user),
      tap((user) => this.persistUser(user)),
      catchError((error: unknown) => {
        // Explicit rejection revokes the local session; transient outages do not.
        const rejected = error instanceof HttpErrorResponse && (error.status === 401 || error.status === 403);
        const fallback = rejected ? null : this.readUserFromLocalStorage();
        this.persistUser(fallback);
        return of(fallback);
      }),
    );
  }

  login(payload: LoginPayload): Observable<User | null> {
    return this.loginSubmitHttp(payload.user, payload.pwd).pipe(
      map((response) => this.extractUserFromLoginResponse(response)),
      tap((user) => {
        this.persistUser(user, true);
      }),
      catchError(() => of(null))
    );
  }

  register(payload: RegisterPayload): Observable<User | null> {
    return this.http.post<AuthResponse>(this.buildAuthUrl('/auth/register'), payload).pipe(
      map((response) => response.user),
      tap((user) => {
        this.persistUser(user, true);
      }),
      catchError(() => of(null))
    );
  }

  resendPassword(payload: ForgotPasswordPayload): Observable<boolean> {
    return this.http.get<{ success?: boolean }>('https://cip.brapci.inf.br/auth/forgot-password', {
      params: { email: payload.email }
    }).pipe(
      tap((response) => {
        console.log('resendPassword response:', response);
      }),
      map((response) => response.success ?? true),
      catchError(() => of(false))
    );
  }

  logout(): Observable<void> {
    return this.http.post<void>(this.buildAuthUrl('/auth/logout'), {}).pipe(
      tap(() => {
        this.persistUser(null);
      }),
      catchError(() => {
        // Keep legacy behavior: local logout should always clear state.
        this.persistUser(null);
        return of(void 0);
      })
    );
  }

  // Legacy compatibility methods.
  public getUser(): User | null {
    this.loadUserFromSession();
    return this.user;
  }

  public getLocalUser(): User | null {
    return this.readStoredSessionFromLocalStorage()?.user ?? null;
  }

  public getApiToken(): string {
    const currentToken = this.user?.token || this.userSubject.value?.token || this.getLocalUser()?.token;
    if (currentToken) return currentToken;

    const cached = this.sessionService.getSessionValue(this.storageKey);
    if (!cached) return '';
    try {
      return this.extractToken(JSON.parse(cached) as Record<string, unknown>);
    } catch {
      return '';
    }
  }

  public getLocalSessionExpiresAt(): number | null {
    return this.readStoredSessionFromLocalStorage()?.expiresAt ?? null;
  }

  public checkLogin(res: unknown): boolean {
    const normalized = this.extractUserFromLoginResponse(res);
    if (!normalized) {
      console.error('Dados incorretos');
      return false;
    }

    this.persistUser(normalized, true);
    return true;
  }

  public isLogged(): boolean {
    return !!this.getUser();
  }

  public callbackOauthHttp(token: string): Observable<unknown> {
    return this.legacyPost('socials/callback2', { token });
  }

  public signUp(name: string, email: string, institution: string): Observable<unknown> {
    return this.legacyPost('socials/signup', {
      signup_name: name,
      signup_email: email,
      signup_institution: institution
    });
  }

  public questionHttp(email: string, text: string): Observable<unknown> {
    return this.legacyPost('socials/contact', { email, text });
  }

  public forgotHttp(email: string): Observable<unknown> {
    return this.legacyPost('socials/forgot', { email });
  }

  public loginSubmitHttp(login: string, pass: string): Observable<unknown> {
    return this.legacyPost('socials/signin', { user: login, pwd: pass });
  }

  public loginOauthHttp(token: string): Observable<unknown> {
    return this.legacyPost('socials/oauth2', { token });
  }
}
