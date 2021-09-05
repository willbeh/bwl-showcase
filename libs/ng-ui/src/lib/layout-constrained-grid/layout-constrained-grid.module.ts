import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutConstrainedGridComponent } from './layout-constrained-grid.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LayoutConstrainedGridComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    LayoutConstrainedGridComponent
  ]
})
export class LayoutConstrainedGridModule { }
