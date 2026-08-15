import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';

export const chatAuthGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.getLocalUser()) return true;
  return auth.checkSession().pipe(
    map((user) => user ? true : router.createUrlTree(['/signin'], { queryParams: { returnUrl: '/chat' } })),
  );
};

