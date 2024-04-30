import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FactoryPageLayoutComponent } from '../../components/factory-page-layout/factory-page-layout.component';
import { FactoryItemStore } from '../../interfaces/models.interface';
import { FactoryStoreItemComponent } from '../../components/factory-store-item/factory-store-item.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-factory-stores',
  standalone: true,
  imports: [FactoryPageLayoutComponent, FactoryStoreItemComponent, CommonModule],
  templateUrl: './factory-stores.component.html',
  styleUrl: './factory-stores.component.css'
})
export class FactoryStoresComponent {

  constructor(private router: Router) { }

  storesList: FactoryItemStore[] = [
    {
      id: 123,
      img: '/assets/img/shop1.png',
      address: 'via rossi 12 Castelfranco Veneto, TV',
      name: 'Colors of Benetton Castelfranco'
    },
    {
      id: 231,
      img: '/assets/img/shop1.png',
      address: 'via Matteotti 35 Padova',
      name: 'Colors of Benetton Padova'
    }
  ];

  goCheckSerial() {
    this.router.navigateByUrl('factory/check-serial')
  }
  addStore() {
    console.log("crete")
    this.router.navigateByUrl('factory/create-store')

  }

}
