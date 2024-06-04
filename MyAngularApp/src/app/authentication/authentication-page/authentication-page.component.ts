import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication-page',
  templateUrl: './authentication-page.component.html',
  styles: ``
})
export class AuthenticationPageComponent {
  constructor(private router: Router) { }

  navigateToHome(): void {
    this.router.navigate(['/home']);
  }
}
