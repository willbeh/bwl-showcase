import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from '@bwl/data';
import { TableBasicSchema } from 'libs/ng-ui/src/lib/tables/table-basic/table-basic.component';
import { Observable } from 'rxjs';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'bwl-groups',
  template: `
    <bwl-header>
      Groups
      <ng-container actions>
        <bwl-button-primary [routerLink]="['new']">Create</bwl-button-primary>
      </ng-container>
    </bwl-header>
    <bwl-table-basic [schemas]="schemas" [entities$]="entities$" [showEdit]="true" (edit)="edit($event)">
    </bwl-table-basic>
  `,
  styles: [
  ]
})
export class GroupsComponent implements OnInit {
  entities$ = new Observable<Group[]>()

  schemas: TableBasicSchema[] = [
    {key: 'name', label: 'Name'},
    {key: 'createdAt', label: 'Created At', type: 'date'},
  ]

  constructor(private service: GroupService, private router: Router) { }

  ngOnInit(): void {
    this.entities$ = this.service.fetch()
  }

  edit(entity: Group){
    console.log(entity)
    this.router.navigate(['/portal', 'groups', entity.id, 'edit'])
  }

}
