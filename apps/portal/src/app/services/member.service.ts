import { Injectable } from '@angular/core';
import * as Parse from 'parse'
import { from, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable()
export class MemberService {
  constructor() {}

  get(): Observable<Parse.User<Parse.Attributes>[]> {
    const query = new Parse.Query(Parse.User);
    return from(query.find()).pipe(take(1));
  }

  count(): Promise<number> {
    const query = new Parse.Query(Parse.User);
    return query.count()
  }
}