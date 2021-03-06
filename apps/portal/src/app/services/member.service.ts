import { Injectable } from '@angular/core';
import * as Parse from 'parse'
import { ParseBaseService } from './parse-base.service';

@Injectable()
export class MemberService extends ParseBaseService<Parse.User> {
  constructor() {
    super(Parse.User)
  }
}