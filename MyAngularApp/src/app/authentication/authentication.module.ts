import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationPageComponent } from './authentication-page/authentication-page.component';
import { ButtonComponent } from '../../components/button/button.component';

@NgModule({
  declarations: [
    AuthenticationPageComponent
  ],
  imports: [CommonModule, AuthenticationRoutingModule, ButtonComponent],
})
export class AuthenticationModule {}
