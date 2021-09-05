import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsComponent } from './groups.component';
import { RouterModule } from '@angular/router';
import { GroupFormComponent } from './group-form.component';
import { ButtonsModule, HeaderModule, TablesModule } from '@bwl/ng-ui';
import { ReactiveFormsModule } from '@angular/forms';
import { GroupService } from '../../services/group.service';



@NgModule({
  declarations: [
    GroupsComponent,
    GroupFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: GroupsComponent},
      {path: 'new', component: GroupFormComponent},
      {path: ':id/edit', component: GroupFormComponent},
    ]),
    ReactiveFormsModule,
    HeaderModule,
    ButtonsModule,
    TablesModule,
  ],
  providers: [
    GroupService
  ]
})
export class GroupsModule { }
