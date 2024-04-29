import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {

  constructor() { }

  storeUser(email: string) {
    localStorage.setItem('u', email);
  }
  logoutUser() {
    localStorage.removeItem('u');
  }
}
