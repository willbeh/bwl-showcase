import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bwl-layout-constrained-grid',
  templateUrl: './layout-constrained-grid.component.html',
  styles: [
  ]
})
export class LayoutConstrainedGridComponent implements OnInit {
  isMenuOpen = false
  isProfileOpen = false
  @Input() menus: LayoutConstrainedGridMenu[] = []

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }

  toggleProfile() {
    this.isProfileOpen = !this.isProfileOpen
  }

}

export interface LayoutConstrainedGridMenu {
  label: string,
  path: string[]
}
