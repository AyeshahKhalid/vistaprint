import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

/** Account pages require a session; otherwise send to sign-in and come back afterwards. */
export const authGuard: CanActivateFn = (_route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  return auth.isSignedIn() ? true : router.createUrlTree(['/sign-in'], { queryParams: { returnUrl: state.url } });
};
