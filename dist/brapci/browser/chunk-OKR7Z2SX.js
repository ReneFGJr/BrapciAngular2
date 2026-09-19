import {
  API_CONFIG
} from "./chunk-U6AVKRN4.js";
import {
  HttpContextToken,
  HttpErrorResponse,
  Router,
  isPlatformBrowser
} from "./chunk-BDVW3XMC.js";
import {
  PLATFORM_ID,
  TimeoutError,
  catchError,
  inject,
  throwError,
  timeout
} from "./chunk-R3SGMIKW.js";

// src/app/core/interceptors/home-connection.interceptor.ts
var SKIP_HOME_CONNECTION_REDIRECT = new HttpContextToken(() => false);
var homeConnectionInterceptor = (request, next) => {
  const router = inject(Router);
  const baseUrl = inject(API_CONFIG).brapciApiBaseUrl.replace(/\/$/, "");
  const isHome = () => router.url.split(/[?#]/)[0] === "/";
  const isApi = request.url === baseUrl || request.url.startsWith(`${baseUrl}/`);
  if (!isPlatformBrowser(inject(PLATFORM_ID)) || !isHome() || !isApi || request.context.get(SKIP_HOME_CONNECTION_REDIRECT)) {
    return next(request);
  }
  return next(request).pipe(timeout(3e4), catchError((error) => {
    const unavailable = error instanceof TimeoutError || error instanceof HttpErrorResponse && (error.status === 0 || error.status === 408 || error.status >= 500);
    if (unavailable && isHome()) {
      void router.navigateByUrl("/501", { replaceUrl: true });
    }
    return throwError(() => error);
  }));
};

export {
  SKIP_HOME_CONNECTION_REDIRECT,
  homeConnectionInterceptor
};
//# sourceMappingURL=chunk-OKR7Z2SX.js.map
