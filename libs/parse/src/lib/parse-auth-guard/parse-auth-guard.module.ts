import { NgModule } from '@angular/core';
import { ParseAuthGuard } from './parse-auth-guard';


@NgModule({
  providers: [
    ParseAuthGuard
  ]
})
export class ParseAuthGuardModule { }
