import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { ButtonsModule } from '@bwl/ng-ui';
import { ParseAuthService } from '@bwl/parse';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: LoginComponent}
    ]),
    ButtonsModule,
  ],
  providers: [
    ParseAuthService
  ]
})
export class AuthModule { }
