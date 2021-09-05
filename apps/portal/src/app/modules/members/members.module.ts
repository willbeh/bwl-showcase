import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersComponent } from './members.component';
import { RouterModule } from '@angular/router';
import { MemberService } from '../../services/member.service';
import { HeaderModule, TablesModule } from '@bwl/ng-ui';



@NgModule({
  declarations: [
    MembersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: MembersComponent}
    ]),
    TablesModule,
    HeaderModule,
  ],
  providers: [
    MemberService
  ]
})
export class MembersModule { }
