import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
type CountStep = 1 | 2 | 3 | 4;
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  step: CountStep = 1;

  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    'repeat-password': new FormControl(''),
    'company-name': new FormControl(''),
    'vat': new FormControl(''),
    'address': new FormControl(''),
    'province': new FormControl(''),
    'cap': new FormControl(''),
  });

  goNext() {
    this.step = _next(this.step);
  }

  goBack() {
    this.step = _back(this.step);
  }
  register() {

  }

}
function _next(step: CountStep): CountStep {
  switch (step) {
    case 1:
      return 2;
    case 2:
      return 3;
    case 3:
      return 4;
    case 4:
      return 4;
  }
}
function _back(step: CountStep): CountStep {
  switch (step) {
    case 1:
      return 2;
    case 2:
      return 1;
    case 3:
      return 2;
    case 4:
      return 3;
  }
}

