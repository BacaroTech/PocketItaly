import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {
  FactoryPageLayoutComponent,
  FactoryStoreItemComponent,
} from 'src/app/components';
import { FactoryItemStore } from 'src/app/interfaces';
import { FactoryStoresService } from 'src/app/services';

@Component({
  selector: 'app-factory-stores',
  standalone: true,
  imports: [FactoryPageLayoutComponent, FactoryStoreItemComponent, CommonModule],
  templateUrl: './factory-stores.component.html',
  styleUrl: './factory-stores.component.css'
})
export class FactoryStoresComponent {
  
  storesList: FactoryItemStore[] = [];
  constructor(
    private router: Router,
    private service: FactoryStoresService
  ) { }

  ngAfterViewInit() {
    this.service.getStores().subscribe((r) => {
      this.storesList = r
    })
  }
  goCheckSerial() {
    this.router.navigateByUrl('factory/check-serial')
  }

  addStore() {
    this.router.navigateByUrl('factory/create-store')
  }

}
