import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationPageComponent } from './authentication/authentication-page/authentication-page.component';

const routes: Routes = [
  {
    path: "home",
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
  },
  {
    path: "login",
    loadChildren: () => import('./authentication/authentication.module').then((m) => m.AuthenticationModule)
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
