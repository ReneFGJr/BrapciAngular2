import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { API_CONFIG } from '../tokens/api-config.token';

export const apiLoggingInterceptor: HttpInterceptorFn = (req, next) => {
  if (!isPlatformBrowser(inject(PLATFORM_ID))) return next(req);

  const auth = inject(AuthService);
  if (auth.user?.role !== 'admin') return next(req);

  const document = inject(DOCUMENT);
  const config = inject(API_CONFIG);
  const url = new URL(req.urlWithParams, document.baseURI);
  const isApiRequest = Object.values(config).some((base: string) => {
    const api = new URL(base, document.baseURI);
    const path = api.pathname.replace(/\/$/, '');
    return url.origin === api.origin &&
      (url.pathname === path || url.pathname.startsWith(path + '/'));
  }) || /^\/(api|auth)(\/|$)/.test(url.pathname);

  if (!isApiRequest) return next(req);

  // Keep credentials and personal authentication fields out of console output.
  for (const key of Array.from(url.searchParams.keys())) {
    if (/token|key|secret|password|authorization|email/i.test(key)) {
      url.searchParams.set(key, '[redacted]');
    }
  }
  const address = url.toString();
  const started = performance.now();
  console.log('[API]', req.method, address);

  return next(req).pipe(tap({
    next: (event) => {
      if (event instanceof HttpResponse && auth.user?.role === 'admin') {
        console.log('[API]', req.method, address, event.status, Math.round(performance.now() - started) + ' ms');
      }
    },
    error: (error) => {
      if (auth.user?.role === 'admin') {
        console.log('[API]', req.method, address, 'Erro', error.status, Math.round(performance.now() - started) + ' ms');
      }
    },
  }));
};
