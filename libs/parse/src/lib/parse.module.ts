import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParseAuthService } from './parse-auth.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    ParseAuthService
  ],
})
export class ParseModule {}
