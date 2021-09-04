import { Component, OnInit } from '@angular/core';
import { ParseAuthService } from '@bwl/parse'

@Component({
  selector: 'bwl-login',
  template: `
    <p>
      login works!
    </p>
    <bwl-button-primary (click)="login()" class="mr-2">Login</bwl-button-primary>
    <bwl-button-primary (click)="create()">Create</bwl-button-primary>
  `,
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  constructor(private auth: ParseAuthService) { }

  ngOnInit(): void {
  }

  login() {
    console.log('login')
    this.auth.login('william@bwltech.com', 'password')
      .then(user => console.log(user))
      .catch(e => console.error('login error', e.message))
  }
  
  create() {
    this.auth.create('william@bwltech.com', 'password')
      .then(user => console.log(user))
      .catch(e => console.error('create error', e.message))
  }
}
