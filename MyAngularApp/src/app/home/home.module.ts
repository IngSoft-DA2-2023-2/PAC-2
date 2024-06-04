import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { NumbersInputComponent } from '../../components/numbers-input/numbers-input.component';
import { DropdownComponent } from '../../components/dropdown/dropdown.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, FormsModule, HomeRoutingModule, NumbersInputComponent, DropdownComponent],
})
export class HomeModule {}
