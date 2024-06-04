import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationPageComponent } from './authentication-page/authentication-page.component';

@NgModule({
  declarations: [
    AuthenticationPageComponent
  ],
  imports: [CommonModule, AuthenticationRoutingModule, RouterModule],
  exports: [AuthenticationPageComponent],
})
export class AuthenticationModule {}
