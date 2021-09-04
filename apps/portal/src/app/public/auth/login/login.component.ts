import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParseAuthService } from '@bwl/parse'

@Component({
  selector: 'bwl-login',
  template: `
    <p>
      login works!
    </p>
    <bwl-button-primary (click)="login()" class="mr-2">Login</bwl-button-primary>
    <bwl-button-primary (click)="check()" class="mr-2">check</bwl-button-primary>
    <bwl-button-primary (click)="create()">Create</bwl-button-primary>
  `,
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  constructor(private auth: ParseAuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log('login')
    this.auth.login('hello@bwltech.com', 'password')
      .then(() => this.router.navigate(['portal']))
      .catch(e => console.error('login error', e))
  }
  
  create() {
    this.auth.create('hello@bwltech.com', 'password')
      .then(user => console.log(user))
      .catch(e => console.error('create error', e.message))
  }

  check() {
    console.log('user', this.auth.user)
  }
}
