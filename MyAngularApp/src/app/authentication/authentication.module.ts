import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationPageComponent } from './authentication-page/authentication-page.component';
import { SharedModule } from '../shared.module';
import { ButtonComponent } from '../../components/button/button.component';
import { DropdownComponent } from '../../components/dropdown/dropdown.component';
import { NumbersInputComponent } from '../../components/numbers-input/numbers-input.component';

@NgModule({
  declarations: [
    AuthenticationPageComponent,
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    DropdownComponent,
    NumbersInputComponent,
    ButtonComponent,
  ],
})
export class AuthenticationModule {}
