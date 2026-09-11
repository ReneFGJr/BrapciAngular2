import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = (_route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const localUser = auth.getLocalUser();

  if (localUser) {
    return localUser.role === 'admin' ? true : router.createUrlTree(['/']);
  }

  return auth.checkSession().pipe(
    map((user) => {
      if (!user) {
        return router.createUrlTree(['/signin'], {
          queryParams: { returnUrl: state.url },
        });
      }

      return user.role === 'admin' ? true : router.createUrlTree(['/']);
    }),
  );
};
