import { Component } from '@angular/core';
import { NavbarComponent } from '../../flowbit-components';
import { CommonModule } from '@angular/common';
import { zeccaList } from '../../interfaces/menuList';
import { NavbarBaseTheme } from '../../flowbit-components/lib/components/navbar/navbar.theme';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-zecca-navbar',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterLink],
  templateUrl: './zecca-navbar.component.html',
  styleUrl: './zecca-navbar.component.css'
})
export class ZeccaNavbarComponent {
  menu = zeccaList;
  customStyle: Partial<NavbarBaseTheme> = {
    root: {
      color: {
        gray: 'bg-pocket_orange py-0'
      }
    },
    content: {}
  };

}
