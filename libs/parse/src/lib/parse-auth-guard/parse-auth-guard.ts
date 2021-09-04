import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { from, Observable, pipe, UnaryFunction } from 'rxjs';
import { map, take } from 'rxjs/operators';

import * as Parse from 'parse'

export type AuthPipeGenerator = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => AuthPipe;
export type AuthPipe = UnaryFunction<Observable<Parse.User|null>, Observable<boolean|string|any[]>>;

export const loggedIn: AuthPipe = map(user => {
  console.log('loggedIn', user)
  return !!user
});

@Injectable({
  providedIn: 'any'
})
export class ParseAuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const authPipeFactory = next.data.authGuardPipe as AuthPipeGenerator || (() => loggedIn);
    // const can = authPipeFactory(next, state);

    return from(Parse.User.currentAsync()).pipe(
      take(1),
      authPipeFactory(next, state),
      map(can => {
        if (typeof can === 'boolean') {
          return can;
        } else if (Array.isArray(can)) {
          return this.router.createUrlTree(can);
        } else {
          // TODO(EdricChan03): Add tests
          return this.router.parseUrl(can);
        }
      })
    )
  }

}

export const canActivate = (pipe: AuthPipeGenerator) => ({
  canActivate: [ ParseAuthGuard ], data: { authGuardPipe: pipe }
});

export const redirectUnauthorizedTo: (redirect: string|any[]) => AuthPipe =
  (redirect) => pipe(loggedIn, map(loggedIn => loggedIn || redirect));
export const redirectLoggedInTo: (redirect: string|any[]) => AuthPipe =
  (redirect) => pipe(loggedIn, map(loggedIn => loggedIn && redirect || true));