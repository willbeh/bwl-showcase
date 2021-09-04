import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bwl-button-primary',
  template: `
  <button type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    <ng-content></ng-content>
  </button>
  `,
  styles: [
  ]
})
export class ButtonPrimaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}