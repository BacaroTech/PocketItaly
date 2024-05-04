import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';

import {
  FactoryCreateBatchItemComponent,
  FactoryPageLayoutComponent,
} from 'src/app/components';
import { FactoryItemBatch } from 'src/app/interfaces';
import { FactoryWarehouseService } from 'src/app/services';

type CheckSerialResult = "success" | "fail" | "not-selected" | "serial";

@Component({
  selector: 'app-factory-create-batch',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FactoryPageLayoutComponent,
    FactoryCreateBatchItemComponent
  ],
  templateUrl: './factory-create-batch.component.html',
  styleUrl: './factory-create-batch.component.css'
})
export class FactoryCreateBatchComponent {
  itemsList: FactoryItemBatch[] = [];
  checkDone: CheckSerialResult = "not-selected";
  form = new FormGroup({
    serial: new FormControl(''),
  });
  constructor(
    private router: Router,
    private service: FactoryWarehouseService
  ) { }

  ngAfterViewInit() {
    this.service.getItems().subscribe((r) => {
      this.itemsList = r.map(_r => ({ ..._r, selected: false }))
    })
  }

  create() {
    this.checkDone = "success";
  }
  toogleItem(itemToogled: FactoryItemBatch) {
    const itemsNew = this.itemsList.map(item => {
      const newItem = { ...item }
      if (item.id === itemToogled.id) {
        newItem.selected = !newItem.selected;
      }
      return newItem;
    }
    )
    this.itemsList = itemsNew;
  }
  next() {
    this.checkDone = "serial";
  }
}
