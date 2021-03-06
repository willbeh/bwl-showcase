import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ParseAuthService } from '@bwl/parse'

@Component({
  selector: 'bwl-login',
  template: `
<div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
      Sign in to your account
    </h2>
    <p class="mt-2 text-center text-sm text-gray-600">
      Or
      <a [routerLink]="['/auth','register']" href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
        Register a new account
      </a>
    </p>
  </div>

  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form class="space-y-6" [formGroup]="form" (ngSubmit)="onSubmit()">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <div class="mt-1">
            <input formControlName="email" id="email" name="email" type="email" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div class="mt-1">
            <input formControlName="password" id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <!-- <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
              Remember me
            </label> -->
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button type="submit" [disabled]="this.form.invalid" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Sign in
          </button>
        </div>
      </form>

    </div>
  </div>
</div>

  `,
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private auth: ParseAuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.form.valid) {
      const {email, password} = this.form.value;
      this.auth.login(email, password)
        .then((user) => {
          if(user){
            this.router.navigate(['portal'])
          }
          
        })
        .catch(e => console.error('login error', e))
    }
  }
}
