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
} from 'src/app/flowbit-components';
import { RouteProps } from 'src/app/interfaces';
import { UserSessionService } from 'src/app/services';

@Component({
  selector: 'app-factory-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, SidebarComponent, SidebarItemGroupComponent, SidebarItemComponent, SidebarItemComponentBtn],
  templateUrl: './factory-sidebar.component.html',
  styleUrl: './factory-sidebar.component.css'
})
export class FactorySidebarComponent {
  menuList: RouteProps[] = []

  constructor(
    private userSession: UserSessionService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.menuList = [...this.userSession.getMenuList()];
  }

  logout() {
    this.userSession.logoutUser();
    this.router.navigateByUrl('/login-home')
  }
}
