import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AuthenticationComponent } from './authentication/authentication/authentication.component';

const routes: Routes = [
  {
    path: './authentication/authentication/authentication.component.html',
    component: AuthenticationComponent,
  },
  {
    path: './home/home/home.component.html',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
