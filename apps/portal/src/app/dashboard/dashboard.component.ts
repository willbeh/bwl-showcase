import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParseAuthService } from '@bwl/parse';
import { User } from '@bwl/data';

@Component({
  selector: 'bwl-dashboard',
  template: `
  <bwl-header>Dashboard</bwl-header>
    <section aria-labelledby="profile-overview-title">
      <div class="rounded-lg bg-white overflow-hidden shadow">
        <h2 class="sr-only" id="profile-overview-title">Profile Overview</h2>
        <div class="bg-white p-6">
          <div class="sm:flex sm:items-center sm:justify-between">
            <div class="sm:flex sm:space-x-5">
              <div class="flex-shrink-0">
                <img
                  class="mx-auto h-20 w-20 rounded-full"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                <p class="text-sm font-medium text-gray-600">Welcome back,</p>
                <p class="text-xl font-bold text-gray-900 sm:text-2xl">
                  {{ user?.name }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x"
        >
          <div class="px-6 py-5 text-sm font-medium text-center">
            <span class="text-gray-900">12</span>
            <span class="text-gray-600">Vacation days left</span>
          </div>

          <div class="px-6 py-5 text-sm font-medium text-center">
            <span class="text-gray-900">4</span>
            <span class="text-gray-600">Sick days left</span>
          </div>

          <div class="px-6 py-5 text-sm font-medium text-center">
            <span class="text-gray-900">2</span>
            <span class="text-gray-600">Personal days left</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class DashboardComponent implements OnInit {
  user?: User;
  constructor(private auth: ParseAuthService, private router: Router) {}

  ngOnInit(): void {
    this.user = this.auth.user!
  }

  logout() {
    this.auth
      .logout()
      .then(() => {
        this.router.navigate(['login']);
      })
      .catch((e) => console.error('logout error', e));
  }
}
