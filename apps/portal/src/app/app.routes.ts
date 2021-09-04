import { Routes } from "@angular/router";
import { IsAuthGuard } from "@bwl/ng-features";
import { HomeComponent } from "./public/home/home.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', loadChildren: () => import('./public/auth/auth.module').then(m => m.AuthModule)},
  {path: 'portal', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [IsAuthGuard]},
]