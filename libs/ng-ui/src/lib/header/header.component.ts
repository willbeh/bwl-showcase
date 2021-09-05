import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bwl-header',
  template: `
  <!-- This example requires Tailwind CSS v2.0+ -->
<div>
  <div class="mt-1 mb-1 md:flex md:items-center md:justify-between">
    <div class="flex-1 min-w-0">
      <h2 class="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate">
        <ng-content></ng-content>
      </h2>
    </div>
    <div class="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
      <ng-content select="actions"></ng-content>
    </div>
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
