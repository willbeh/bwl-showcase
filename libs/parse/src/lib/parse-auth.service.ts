import { Injectable } from '@angular/core';
import * as Parse from 'parse'

@Injectable()
export class ParseAuthService {
  constructor() {}

  login(userid: string, password: string) {
    return Parse.User.logIn(userid, userid);
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