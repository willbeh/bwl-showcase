import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@bwl/data';
import { ParseAuthService } from '@bwl/parse';
import { LayoutConstrainedGridMenu } from 'libs/ng-ui/src/lib/layout-constrained-grid/layout-constrained-grid.component';

@Component({
  selector: 'bwl-app-base',
  template: `
  <ng-container *ngIf="user">
    <bwl-layout-constrained-grid [menus]="menus" (logout)="logout()" [user]="user">
      <router-outlet></router-outlet>
    </bwl-layout-constrained-grid>
  </ng-container>
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
  user?: User | null;

  constructor(private auth: ParseAuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth.getUser().then((user) => {
      if(user) {
        this.user = ({id: user.id, ...user.attributes} as User) 
      } else {
        this.user = null
      }
    })
  }

  logout() {
    console.log('Bye bye')
    this.auth.logout()
      .then(() => {
        this.user = null
        this.router.navigate(['/auth'])
      })
      .catch(e => console.error(e))
  }

}
