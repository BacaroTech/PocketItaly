import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { FactoryItemStore } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class FactoryStoresService {

  constructor(private http: HttpClient) { }

  getStores() {
    return this.http.get<FactoryItemStore[]>("/assets/mock/store.json");
  }


}
