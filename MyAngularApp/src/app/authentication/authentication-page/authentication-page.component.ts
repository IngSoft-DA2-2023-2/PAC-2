import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication-page',
  standalone: false,
  templateUrl: './authentication-page.component.html',
  styles: ``
})
export class AuthenticationPageComponent implements OnInit{
  
  constructor(private router: Router) {}
  
  ngOnInit(): void {
    
  }

  homePage = () => {
    this.router.navigate(['./home'])
  }
}
