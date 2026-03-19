import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const isAuthRequest = req.url.startsWith('/auth');

  if (!isAuthRequest) {
    return next(req);
  }

  return next(req.clone({ withCredentials: true }));
};
