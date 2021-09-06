import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParseAuthService } from '@bwl/parse';
import { LayoutConstrainedGridMenu } from 'libs/ng-ui/src/lib/layout-constrained-grid/layout-constrained-grid.component';

@Component({
  selector: 'bwl-app-base',
  template: `
    <bwl-layout-constrained-grid [menus]="menus" (logout)="logout()">
      <router-outlet></router-outlet>
    </bwl-layout-constrained-grid>
  `,
  styles: [
  ]
})
export class AppBaseComponent implements OnInit {
  menus: LayoutConstrainedGridMenu[] = [
    {label: 'Dashboard', path: ['/portal']},
    {label: 'Members', path: ['/portal', 'members']},
    {label: 'Groups', path: ['/portal', 'groups']},
  ]

  constructor(private auth: ParseAuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.auth.logout()
      .then(() => this.router.navigate(['/']))
      .catch(e => console.error(e))
  }

}
