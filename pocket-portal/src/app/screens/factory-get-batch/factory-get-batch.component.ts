import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

import { FactoryPageLayoutComponent } from 'src/app/components';

type CheckSerialResult = "success" | "fail" | "not-done";

@Component({
  selector: 'app-factory-get-batch',
  standalone: true,
  imports: [
    CommonModule,
    FactoryPageLayoutComponent,
    ReactiveFormsModule
  ],
  templateUrl: './factory-get-batch.component.html',
  styleUrl: './factory-get-batch.component.css'
})
export class FactoryGetBatchComponent {
  form = new FormGroup({
    serial: new FormControl(''),
  });

  checkDone: CheckSerialResult = "not-done";

  checkCoupon() {
    const serial = this.form?.value.serial;
    this.checkDone = "success";
  }
}
