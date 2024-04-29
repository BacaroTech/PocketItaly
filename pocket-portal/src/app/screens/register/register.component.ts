import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
type CountStep = 1 | 2 | 3 | 4;
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  step: CountStep = 1;

  goNext() {
    this.step = _next(this.step);
  }

}
function _next(step: CountStep): CountStep {
  switch(step) {
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

