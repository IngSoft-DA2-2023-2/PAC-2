import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { NumbersInputComponent } from '../../components/numbers-input/numbers-input.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, HomeRoutingModule, HomePageComponent]
})
export class HomeModule {}
