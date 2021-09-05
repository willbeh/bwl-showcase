import { Routes } from "@angular/router";
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from "@bwl/parse";
import { AppBaseComponent } from "./app-base.component";
import { HomeComponent } from "./public/home/home.component";

const redirectLoggedInToPortal = () => redirectLoggedInTo(['portal']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', loadChildren: () => import('./public/auth/auth.module').then(m => m.AuthModule), ...canActivate(redirectLoggedInToPortal)},
  {path: 'portal', component: AppBaseComponent, ...canActivate(redirectUnauthorizedToLogin),
    children: [
      {path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
      {path: 'members', loadChildren: () => import('./modules/members/members.module').then(m => m.MembersModule)},
    ]
  },
]