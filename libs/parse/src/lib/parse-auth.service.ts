import { Injectable } from '@angular/core';
import * as Parse from 'parse'

@Injectable()
export class ParseAuthService {
  constructor() {}

  login(email: string, password: string) {
    return Parse.User.logIn(email, password);
  }

  logout() {
    return Parse.User.logOut()
  }

  create(email: string, password: string) {
    const user = new Parse.User();
    user.set("username", email);
    user.set("password", password);
    user.set("email", email);
    return user.signUp();
  }

  user = Parse.User.current();
}