import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import * as Parse from 'parse';

import { ButtonsModule, LayoutConstrainedGridModule } from '@bwl/ng-ui'
import { HomeComponent } from './public/home/home.component';
import { ParseAuthService } from '@bwl/parse';
import { AppBaseComponent } from './app-base.component';
import { environment } from '../environments/environment';

Parse.initialize(environment.parseAppId); // use your appID & your js key
(Parse as any).serverURL = environment.parse;

@NgModule({
  declarations: [AppComponent, HomeComponent, AppBaseComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
    ButtonsModule,
    LayoutConstrainedGridModule,
  ],
  providers: [
    ParseAuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
