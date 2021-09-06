import { Routes } from "@angular/router";
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from "@bwl/parse";
import { AppBaseComponent } from "./app-base.component";

const redirectLoggedInToPortal = () => redirectLoggedInTo(['portal']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth']);

export const routes: Routes = [
  {path: '', redirectTo: 'portal', pathMatch: 'full'},
  {path: 'auth', loadChildren: () => import('./public/auth/auth.module').then(m => m.AuthModule), ...canActivate(redirectLoggedInToPortal)},
  {path: 'portal', component: AppBaseComponent, ...canActivate(redirectUnauthorizedToLogin),
    children: [
      {path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
      {path: 'members', loadChildren: () => import('./modules/members/members.module').then(m => m.MembersModule)},
      {path: 'groups', loadChildren: () => import('./modules/groups/groups.module').then(m => m.GroupsModule)},
    ]
  },
]