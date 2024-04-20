import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DarkThemeToggleComponent, NavbarComponent, SidebarService } from '../../flowbit-components';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NavbarComponent, DarkThemeToggleComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class PortalNavbarComponent {

  constructor(protected readonly sidebarService: SidebarService) {}

  menuList: string[] = [
    "User",
    "Settings",
    "Sign out"
  ]
}
