import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { ParseAuthService } from '@bwl/parse';

@Injectable()
export class IsAuthGuard implements CanActivate, CanActivateChild {
  constructor(private auth: ParseAuthService, private router:Router) {}

  canActivate() {
    if(this.auth.user) {
      return true
    } else {
      this.router.navigate(["login"]);
      return false
    }
  }

  canActivateChild() {
    return this.canActivate();
  }
}
