import { Routes } from "@angular/router";
import { HomeComponent } from "./public/home/home.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', loadChildren: () => import('./public/auth/auth.module').then(m => m.AuthModule)},
]