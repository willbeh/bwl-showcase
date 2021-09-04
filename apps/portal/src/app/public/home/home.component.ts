import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bwl-home',
  template: `
    <p>
      home works!
    </p>
    <bwl-button-primary routerLink="/login">Login</bwl-button-primary>
    <bwl-button-primary routerLink="/portal">portal</bwl-button-primary>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
