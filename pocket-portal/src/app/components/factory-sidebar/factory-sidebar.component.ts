import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarComponent, SidebarItemGroupComponent, SidebarItemComponent } from '../../flowbit-components';
import { RouteProps, factoryList } from '../../interfaces/menuList';

@Component({
  selector: 'app-factory-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, SidebarComponent, SidebarItemGroupComponent, SidebarItemComponent],
  templateUrl: './factory-sidebar.component.html',
  styleUrl: './factory-sidebar.component.css'
})
export class FactorySidebarComponent {
  menuList: RouteProps[] = [...factoryList]

}
