import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

import { FactoryPageLayoutComponent } from 'src/app/components';

@Component({
  selector: 'app-factory-check-serial',
  standalone: true,
  imports: [FactoryPageLayoutComponent, ReactiveFormsModule],
  templateUrl: './factory-check-serial.component.html',
  styleUrl: './factory-check-serial.component.css'
})
export class FactoryCheckSerialComponent {
  form = new FormGroup({
    serial: new FormControl(''),
  });
  checkCoupon() {
    const serial = this.form?.value.serial;

    console.log('Serial ' + serial)
  }

}
