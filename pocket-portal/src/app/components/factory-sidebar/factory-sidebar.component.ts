import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  Router,
  RouterLink,
} from '@angular/router';

import {
  SidebarComponent,
  SidebarItemComponent,
  SidebarItemComponentBtn,
  SidebarItemGroupComponent,
} from '../../flowbit-components';
import {
  factoryList,
  RouteProps,
} from '../../interfaces/menuList';
import { UserSessionService } from '../../services/user-session.service';

@Component({
  selector: 'app-factory-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, SidebarComponent, SidebarItemGroupComponent, SidebarItemComponent, SidebarItemComponentBtn],
  templateUrl: './factory-sidebar.component.html',
  styleUrl: './factory-sidebar.component.css'
})
export class FactorySidebarComponent {
  menuList: RouteProps[] = [...factoryList]

  constructor(
    private userSession: UserSessionService, 
    private router: Router
  ) {}

  logout() {
    this.userSession.logoutUser();
    this.router.navigateByUrl('/login-home')
  }
}
