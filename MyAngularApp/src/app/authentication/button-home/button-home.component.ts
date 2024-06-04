import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-home',
  templateUrl: './button-home.component.html',
  styles: ``
})
export class ButtonHomeComponent {
  constructor(private readonly _router: Router) {}

  public onSubmit(values: any) {
    //console.log(values);
    //localStorage.setItem('isLoggedIn', 'true');
    this._router.navigate(['/home']);
  }
}


//import { FormControl, FormGroup, Validators } from '@angular/forms';

