import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PMenuItem } from '../../interfaces/menu.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  // menuList: string[] = [
  //   "Dashboard",
  //   "Map",
  //   "Report",
  //   "Product"
  // ]
  menuList: PMenuItem[] = [
    {
      label: "Dashboard",
      id: "Dashboard",
      route: "/dashboard"
    },
    {
      label: "Map",
      id: "Map",
      route: "/map"
    },
    {
      label: "Report",
      id: "Report",
      route: "/report"
    }
  ]
}
