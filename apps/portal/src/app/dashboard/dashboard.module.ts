import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { ButtonsModule, HeaderModule } from '@bwl/ng-ui';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: DashboardComponent}
    ]),
    ButtonsModule,
    HeaderModule,
  ]
})
export class DashboardModule { }
