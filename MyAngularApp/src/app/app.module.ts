import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, RouterOutlet, RouterModule, HomeModule, AuthenticationModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
