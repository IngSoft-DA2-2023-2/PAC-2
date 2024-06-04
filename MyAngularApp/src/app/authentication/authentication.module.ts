import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationPageComponent } from './authentication-page/authentication-page.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AuthenticationPageComponent, /*LoginFormComponent*/],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
   // FormComponent,
    //FormInputComponent,
    //FormButtonComponent,
    RouterModule,
  ],
})
export class AuthenticationModule {}






