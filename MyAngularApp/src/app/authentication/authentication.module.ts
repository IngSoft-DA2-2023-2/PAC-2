import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationPageComponent } from './authentication-page/authentication-page.component';
import { HomePageComponent } from '../home/home-page/home-page.component';

@NgModule({
  declarations: [
  ],
  imports: [CommonModule, AuthenticationRoutingModule, 
    AuthenticationPageComponent, HomePageComponent],
})
export class AuthenticationModule {}
