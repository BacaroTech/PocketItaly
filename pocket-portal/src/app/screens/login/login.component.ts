import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';

import { UserSessionService } from '../../services/user-session.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router, private userSession: UserSessionService) { }

  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  login() {
    const email = this.form?.value.email;
    if (email === 'produttore') {
      this.loginReseller(email);
    } else if (email === 'venditore') {
      this.loginFactory(email);
    } else if (email === 'zecca') {
      this.loginPa(email);
    }
  }

  loginReseller(email: string) {
    this.userSession.storeUser(email);
    this.router.navigateByUrl('/factory/home')
  };
  loginFactory(email: string) {
    this.userSession.storeUser(email);
    this.router.navigateByUrl('/factory/home')
  };
  loginPa(email: string) {
    this.userSession.storeUser(email);
    this.router.navigateByUrl('/zecca/home')
  };

}
