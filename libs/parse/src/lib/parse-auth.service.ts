import { Injectable } from '@angular/core';
import * as Parse from 'parse'

import { User } from '@bwl/data';

@Injectable()
export class ParseAuthService {
  constructor() {}

  login(email: string, password: string) {
    return Parse.User.logIn(email, password);
  }

  logout() {
    return Parse.User.logOut()
  }

  create(name: string, email: string, password: string) {
    const user = new Parse.User();
    user.set("name", name);
    user.set("username", email);
    user.set("password", password);
    user.set("email", email);
    return user.signUp();
  }

  getUser() {
    return Parse.User.currentAsync()
  }

  user: User | null = Parse.User.current() ? ({id: Parse.User.current()?.id, ...Parse.User.current()?.attributes} as User) : null;
}