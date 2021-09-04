import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsAuthGuard } from './guards/is-auth.guard';
import { ParseAuthService } from '@bwl/parse';

@NgModule({
  imports: [CommonModule],
  providers: [
    IsAuthGuard,
    ParseAuthService,
  ]
})
export class NgFeaturesModule {}
