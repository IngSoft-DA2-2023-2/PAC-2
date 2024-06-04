import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationPageComponent } from './authentication-page/authentication-page.component';
import { HomePageComponent } from '../home/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: AuthenticationPageComponent },
  { path: 'home', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
