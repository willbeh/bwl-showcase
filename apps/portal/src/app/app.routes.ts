import { Routes } from "@angular/router";
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from "@bwl/parse";
import { HomeComponent } from "./public/home/home.component";

const redirectLoggedInToPortal = () => redirectLoggedInTo(['portal']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', loadChildren: () => import('./public/auth/auth.module').then(m => m.AuthModule), ...canActivate(redirectLoggedInToPortal)},
  {path: 'portal', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), ...canActivate(redirectUnauthorizedToLogin)},
]