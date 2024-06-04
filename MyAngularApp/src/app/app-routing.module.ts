import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { AuthenticationPageComponent } from './authentication/authentication-page/authentication-page.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationPageComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}



