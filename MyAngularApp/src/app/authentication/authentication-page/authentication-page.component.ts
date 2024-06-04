import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-authentication-page',
  templateUrl: './authentication-page.component.html',
  styles: ``
})
export class AuthenticationPageComponent {
  constructor(private readonly _router: Router) {}

  public onSubmit(values: any) {
    //console.log(values);
    //localStorage.setItem('isLoggedIn', 'true');
    this._router.navigate(['/home']);
  }
}