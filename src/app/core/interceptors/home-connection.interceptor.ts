import { isPlatformBrowser } from '@angular/common';
import { HttpContextToken, HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError, timeout, TimeoutError } from 'rxjs';
import { API_CONFIG } from '../tokens/api-config.token';

export const SKIP_HOME_CONNECTION_REDIRECT = new HttpContextToken<boolean>(() => false);

export const homeConnectionInterceptor: HttpInterceptorFn = (request, next) => {
  const router = inject(Router);
  const baseUrl = inject(API_CONFIG).brapciApiBaseUrl.replace(/\/$/, '');
  const isHome = () => router.url.split(/[?#]/)[0] === '/';
  const isApi = request.url === baseUrl || request.url.startsWith(`${baseUrl}/`);
  if (!isPlatformBrowser(inject(PLATFORM_ID)) || !isHome() || !isApi ||
      request.context.get(SKIP_HOME_CONNECTION_REDIRECT)) {
    return next(request);
  }
  return next(request).pipe(
    timeout(30000),
    catchError((error: unknown) => {
      const unavailable = error instanceof TimeoutError ||
        (error instanceof HttpErrorResponse &&
          (error.status === 0 || error.status === 408 || error.status >= 500));
      if (unavailable && isHome()) {
        void router.navigateByUrl('/501', { replaceUrl: true });
      }
      return throwError(() => error);
    }),
  );
};
