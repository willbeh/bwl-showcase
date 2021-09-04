import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import * as Parse from 'parse';

import { ButtonsModule } from '@bwl/ng-ui'
import { HomeComponent } from './public/home/home.component';

Parse.initialize('bwl'); // use your appID & your js key
(Parse as any).serverURL = 'http://localhost:1337/api';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
    ButtonsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
