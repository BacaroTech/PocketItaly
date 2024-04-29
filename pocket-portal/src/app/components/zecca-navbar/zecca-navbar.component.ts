import { Component } from '@angular/core';
import { NavbarComponent } from '../../flowbit-components';
import { CommonModule } from '@angular/common';
import { menuList } from '../../interfaces/menuList';
import { NavbarBaseTheme } from '../../flowbit-components/lib/components/navbar/navbar.theme';

@Component({
  selector: 'app-zecca-navbar',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './zecca-navbar.component.html',
  styleUrl: './zecca-navbar.component.css'
})
export class ZeccaNavbarComponent {
  menu = menuList;
  customStyle: Partial<NavbarBaseTheme> = {
    root: {
      color: {
        gray: 'bg-pocket_orange py-0'
      }
    },
    content: {}
  };

}
