import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) { }
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  login() {
    const email = this.form?.value.email;
    if (email === 'factory') {
      this.loginUser();
    } else if (email === 'zecca') {
      this.loginPa();
    }
  }

  loginUser() {
    this.router.navigateByUrl('/factory/home')
  };
  loginPa() {
    this.router.navigateByUrl('/zecca/home')
  };

}
