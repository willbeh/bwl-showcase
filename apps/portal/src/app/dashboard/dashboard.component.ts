import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParseAuthService } from '@bwl/parse';

@Component({
  selector: 'bwl-dashboard',
  template: `
    
  `,
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  constructor(private auth: ParseAuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.auth.logout().then(() => {
      this.router.navigate(['login'])
    }).catch(e => console.error('logout error', e))
  }

}
