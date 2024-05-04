import { Injectable } from '@angular/core';

import {
  factoryList,
  resellerList,
} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {

  currentUser?: string | null;

  constructor() { }

  storeUser(email: string) {
    this.currentUser = email;
    localStorage.setItem('u', email);
  }
  logoutUser() {
    this.currentUser = null;
    localStorage.removeItem('u');
  }

  isReseller() {
    return this.currentUser === "venditore";
  }

  isFactory() {
    return this.currentUser === "produttore";
  }

  getMenuList() {
    return this.isFactory() ? [...factoryList] : [...resellerList]
  }


}
