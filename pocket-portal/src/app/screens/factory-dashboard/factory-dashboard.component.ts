import {
  NgClass,
  NgFor,
} from '@angular/common';
import { Component } from '@angular/core';
import {
  Router,
  RouterLink,
} from '@angular/router';

import { factoryList } from 'src/app/interfaces';
import { UserSessionService } from 'src/app/services';

@Component({
  selector: 'app-factory-dashboard',
  standalone: true,
  imports: [NgClass,  NgFor, RouterLink],
  templateUrl: './factory-dashboard.component.html',
  styleUrl: './factory-dashboard.component.css'
})
export class FactoryDashboardComponent {

  components = factoryList.filter((component) => !!component.card);

  constructor(private userSession: UserSessionService, private router: Router) {}

  logout() {
    this.userSession.logoutUser();
    this.router.navigateByUrl('/login-home')
  }
}
