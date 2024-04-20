import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PMenuItem } from '../../interfaces/menu.interface';
import { RouterLink } from '@angular/router';
import { SidebarComponent, SidebarItemComponent, SidebarItemGroupComponent } from '../../flowbit-components';
import { RouteProps, menuList } from '../../interfaces/menuList';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, SidebarComponent, SidebarItemGroupComponent, SidebarItemComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class PortalSidebarComponent {


  menuList: RouteProps[] = [...menuList]
}
