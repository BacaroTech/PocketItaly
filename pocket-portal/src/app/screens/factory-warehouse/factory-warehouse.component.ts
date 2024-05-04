import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FactoryPageLayoutComponent } from 'src/app/components';
import {
  FactoryWarehouseItemComponent,
} from 'src/app/components/factory-warehouse-item/factory-warehouse-item.component';
import { FactoryItemWarehouse } from 'src/app/interfaces';
import { FactoryWarehouseService } from 'src/app/services';

@Component({
  selector: 'app-factory-warehouse',
  standalone: true,
  imports: [
    CommonModule,
    FactoryPageLayoutComponent,
    FactoryWarehouseItemComponent
  ],
  templateUrl: './factory-warehouse.component.html',
  styleUrl: './factory-warehouse.component.css'
})
export class FactoryWarehouseComponent {

  itemsList: FactoryItemWarehouse[] = [];

  constructor(
    private router: Router,
    private service: FactoryWarehouseService
  ) { }

  ngAfterViewInit() {
    this.service.getItems().subscribe((r) => {
      this.itemsList = r
    })
  }
  goToGetItems() {
    this.router.navigateByUrl("/factory/get-batch")
  }
}
