import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication-page',  
  templateUrl: './authentication-page.component.html',
})
export class AuthenticationPageComponent {
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
