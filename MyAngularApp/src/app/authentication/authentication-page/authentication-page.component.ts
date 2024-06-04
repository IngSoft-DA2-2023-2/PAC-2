import { Component } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-authentication-page',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './authentication-page.component.html',
  styles: `authentication-page.component.css`
})
export class AuthenticationPageComponent {
  constructor(private router: Router) {}

  public onClick(): void {
    this.router.navigate(['/home']);
  }
}
