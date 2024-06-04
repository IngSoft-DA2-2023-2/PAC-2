import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { AuthenticationPageComponent } from './authentication/authentication-page/authentication-page.component';

const routes: Routes = [
  {
    path: 'login', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: '**', component: AuthenticationPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
