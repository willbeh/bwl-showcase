import { Component, OnInit } from '@angular/core';
import { TableBasicSchema } from 'libs/ng-ui/src/lib/tables/table-basic/table-basic.component';

import { Observable } from 'rxjs';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'bwl-members',
  template: `
    <bwl-header>Members</bwl-header>
    <bwl-table-basic [schemas]="schemas" [entities$]="members$">
    </bwl-table-basic>
  `,
  styles: [
  ]
})
export class MembersComponent implements OnInit {
  members$ = new Observable<any>()

  schemas: TableBasicSchema[] = [
    {key: 'username', label: 'Username'},
    {key: 'email', label: 'Email'},
  ]

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.members$ = this.memberService.fetch()
  }

}
