import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-login.component.html',
  styleUrl: './home-login.component.css'
})
export class HomeLoginComponent {

  constructor( public router: Router) {}
  goToLogin() {
    console.log("goToLogin")
    this.router.navigate(['login']);
  };
  goToRegister() {
    console.log("goToRegister")
  };
}
