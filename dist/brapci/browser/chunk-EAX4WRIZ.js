import {
  BehaviorSubject,
  DOCUMENT,
  HttpClient,
  Injectable,
  PLATFORM_ID,
  catchError,
  inject,
  isPlatformBrowser,
  map,
  of,
  setClassMetadata,
  tap,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-JXUQBXUX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-UKK5MWW6.js";

// src/app/core/services/session.service.ts
var SessionService = class _SessionService {
  platformId = inject(PLATFORM_ID);
  document = inject(DOCUMENT);
  isBrowser() {
    return isPlatformBrowser(this.platformId);
  }
  setSessionValue(key, value) {
    if (!this.isBrowser()) {
      return;
    }
    sessionStorage.setItem(key, value);
  }
  getSessionValue(key) {
    if (!this.isBrowser()) {
      return null;
    }
    return sessionStorage.getItem(key);
  }
  clearSessionValue(key) {
    if (!this.isBrowser()) {
      return;
    }
    sessionStorage.removeItem(key);
  }
  setCookie(name, value, days = 365) {
    if (!this.isBrowser()) {
      return;
    }
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1e3).toUTCString();
    this.document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
  }
  getCookie(name) {
    if (!this.isBrowser()) {
      return null;
    }
    const target = `${name}=`;
    const values = this.document.cookie.split(";");
    for (const cookie of values) {
      const item = cookie.trim();
      if (item.startsWith(target)) {
        return decodeURIComponent(item.substring(target.length));
      }
    }
    return null;
  }
  static \u0275fac = function SessionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SessionService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SessionService, factory: _SessionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SessionService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  http = inject(HttpClient);
  sessionService = inject(SessionService);
  appServer = this.resolveAppServerUrl();
  legacyApiBaseUrl = "https://cip.brapci.inf.br/api/";
  storageKey = "brapci_user";
  localStorageKey = "brapci_user_session";
  sessionDurationMs = 30 * 24 * 60 * 60 * 1e3;
  userSubject = new BehaviorSubject(null);
  // Legacy compatibility properties (kept for old callers).
  user = null;
  logged = false;
  currentUser$ = this.userSubject.asObservable();
  resolveAppServerUrl() {
    const globalScope = globalThis;
    const rawServer = globalScope.__env?.["app.server"] ?? globalScope.process?.env?.["app.server"] ?? "";
    return rawServer.replace(/\/$/, "");
  }
  buildAuthUrl(path) {
    return this.appServer ? `${this.appServer}${path}` : path;
  }
  persistUser(user) {
    this.userSubject.next(user);
    this.user = user;
    this.logged = !!user;
    if (user) {
      this.sessionService.setSessionValue(this.storageKey, JSON.stringify(user));
      this.writeUserToLocalStorage(user);
      return;
    }
    this.sessionService.clearSessionValue(this.storageKey);
    this.clearUserFromLocalStorage();
  }
  getLocalStorage() {
    if (typeof window === "undefined") {
      return null;
    }
    return window.localStorage;
  }
  writeUserToLocalStorage(user) {
    const storage = this.getLocalStorage();
    if (!storage) {
      return;
    }
    const payload = {
      user,
      expiresAt: Date.now() + this.sessionDurationMs
    };
    storage.setItem(this.localStorageKey, JSON.stringify(payload));
  }
  clearUserFromLocalStorage() {
    const storage = this.getLocalStorage();
    if (!storage) {
      return;
    }
    storage.removeItem(this.localStorageKey);
  }
  readStoredSessionFromLocalStorage() {
    const storage = this.getLocalStorage();
    if (!storage) {
      return null;
    }
    const raw = storage.getItem(this.localStorageKey);
    if (!raw) {
      return null;
    }
    try {
      const parsed = JSON.parse(raw);
      const expiresAt = Number(parsed.expiresAt ?? 0);
      if (!expiresAt || Date.now() > expiresAt || !parsed.user) {
        this.clearUserFromLocalStorage();
        return null;
      }
      return {
        user: parsed.user,
        expiresAt
      };
    } catch {
      this.clearUserFromLocalStorage();
      return null;
    }
  }
  readUserFromLocalStorage() {
    return this.readStoredSessionFromLocalStorage()?.user ?? null;
  }
  normalizeLegacyUser(raw) {
    if (!raw || typeof raw !== "object") {
      return null;
    }
    const data = raw;
    const idCandidate = Number(data["id"] ?? 0);
    const usernameCandidate = String(data["email"] ?? data["persistent-id"] ?? data["givenName"] ?? "").trim();
    const nameCandidate = String(data["displayName"] ?? data["givenName"] ?? "").trim();
    const adminFlag = Boolean(data["admin"]);
    const tokenCandidate = typeof data["token"] === "string" ? data["token"].trim() : "";
    return {
      id: Number.isFinite(idCandidate) ? idCandidate : 0,
      username: usernameCandidate || "legacy-user",
      name: nameCandidate || usernameCandidate || "Usuario",
      role: adminFlag ? "admin" : "user",
      token: tokenCandidate || void 0
    };
  }
  extractUserFromLoginResponse(response) {
    if (!response || typeof response !== "object") {
      return null;
    }
    const authResponse = response;
    if (authResponse.user && typeof authResponse.user === "object") {
      return authResponse.user;
    }
    if (String(authResponse["status"] ?? "") === "200") {
      return this.normalizeLegacyUser(response);
    }
    return null;
  }
  buildFormData(fields) {
    const formData = new FormData();
    Object.entries(fields).forEach(([key, value]) => formData.append(key, value));
    return formData;
  }
  legacyPost(path, fields) {
    const url = `${this.legacyApiBaseUrl}${path}`;
    return this.http.post(url, this.buildFormData(fields)).pipe(catchError((error) => {
      console.error(`Erro na chamada ${path}:`, error);
      return throwError(() => error);
    }));
  }
  getThemePreference() {
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
      const parsed = JSON.parse(cached);
      return parsed.themePreference ?? null;
    } catch {
      return null;
    }
  }
  updateThemePreference(theme) {
    const current = this.userSubject.value;
    if (!current) {
      return;
    }
    const updatedUser = __spreadProps(__spreadValues({}, current), {
      themePreference: theme
    });
    this.persistUser(updatedUser);
  }
  loadUserFromSession() {
    const localUser = this.readUserFromLocalStorage();
    if (localUser) {
      this.persistUser(localUser);
      return;
    }
    const cached = this.sessionService.getSessionValue(this.storageKey);
    if (cached) {
      const parsed = JSON.parse(cached);
      this.persistUser(parsed);
      return;
    }
    this.persistUser(null);
  }
  checkSession() {
    return this.http.get(this.buildAuthUrl("/auth/me")).pipe(map((response) => response.user), tap((user) => {
      this.persistUser(user);
    }), catchError(() => {
      const localUser = this.readUserFromLocalStorage();
      if (localUser) {
        this.persistUser(localUser);
        return of(localUser);
      }
      this.persistUser(null);
      return of(null);
    }));
  }
  login(payload) {
    return this.loginSubmitHttp(payload.user, payload.pwd).pipe(map((response) => this.extractUserFromLoginResponse(response)), tap((user) => {
      this.persistUser(user);
    }), catchError(() => of(null)));
  }
  register(payload) {
    return this.http.post(this.buildAuthUrl("/auth/register"), payload).pipe(map((response) => response.user), tap((user) => {
      this.persistUser(user);
    }), catchError(() => of(null)));
  }
  resendPassword(payload) {
    return this.http.get("https://cip.brapci.inf.br/auth/forgot-password", {
      params: { email: payload.email }
    }).pipe(tap((response) => {
      console.log("resendPassword response:", response);
    }), map((response) => response.success ?? true), catchError(() => of(false)));
  }
  logout() {
    return this.http.post(this.buildAuthUrl("/auth/logout"), {}).pipe(tap(() => {
      this.persistUser(null);
    }), catchError(() => {
      this.persistUser(null);
      return of(void 0);
    }));
  }
  // Legacy compatibility methods.
  getUser() {
    this.loadUserFromSession();
    return this.user;
  }
  getLocalUser() {
    return this.readStoredSessionFromLocalStorage()?.user ?? null;
  }
  getLocalSessionExpiresAt() {
    return this.readStoredSessionFromLocalStorage()?.expiresAt ?? null;
  }
  checkLogin(res) {
    const normalized = this.extractUserFromLoginResponse(res);
    if (!normalized) {
      console.error("Dados incorretos");
      return false;
    }
    this.persistUser(normalized);
    return true;
  }
  isLogged() {
    return !!this.getUser();
  }
  callbackOauthHttp(token) {
    return this.legacyPost("socials/callback2", { token });
  }
  signUp(name, email, institution) {
    return this.legacyPost("socials/signup", {
      signup_name: name,
      signup_email: email,
      signup_institution: institution
    });
  }
  questionHttp(email, text) {
    return this.legacyPost("socials/contact", { email, text });
  }
  forgotHttp(email) {
    return this.legacyPost("socials/forgot", { email });
  }
  loginSubmitHttp(login, pass) {
    return this.legacyPost("socials/signin", { user: login, pwd: pass });
  }
  loginOauthHttp(token) {
    return this.legacyPost("socials/oauth2", { token });
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  SessionService,
  AuthService
};
//# sourceMappingURL=chunk-EAX4WRIZ.js.map
