import {
  NgClass,
  NgFor,
} from '@angular/common';
import { Component } from '@angular/core';
import {
  Router,
  RouterLink,
} from '@angular/router';

import { RouteProps } from 'src/app/interfaces';
import { UserSessionService } from 'src/app/services';

@Component({
  selector: 'app-factory-dashboard',
  standalone: true,
  imports: [NgClass,  NgFor, RouterLink],
  templateUrl: './factory-dashboard.component.html',
  styleUrl: './factory-dashboard.component.css'
})
export class FactoryDashboardComponent {

  components: RouteProps[] = [];

  constructor(private userSession: UserSessionService, private router: Router) {}

  ngOnInit(): void {
    this.components = [...this.userSession.getMenuList()].filter((component) => !!component.card);
  }

  logout() {
    this.userSession.logoutUser();
    this.router.navigateByUrl('/login-home')
  }
}
