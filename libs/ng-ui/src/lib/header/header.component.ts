import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bwl-header',
  template: `
<div class="md:flex md:items-center md:justify-between mb-4">
  <div class="flex-1 min-w-0">
    <h2 class="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate">
      <ng-content></ng-content>
    </h2>
  </div>
  <div class="mt-4 flex md:mt-0 md:ml-4">
    <ng-content select="[actions]"></ng-content>
  </div>
</div>


  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
