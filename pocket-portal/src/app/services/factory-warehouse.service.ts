import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { FactoryItemWarehouse } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FactoryWarehouseService {

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get<FactoryItemWarehouse[]>("/assets/mock/shop-items.json");
  }

}
