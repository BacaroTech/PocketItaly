import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  Router,
  RouterLink,
} from '@angular/router';

import { NavbarComponent } from '../../flowbit-components';
import {
  NavbarBaseTheme,
} from '../../flowbit-components/lib/components/navbar/navbar.theme';
import { zeccaList } from '../../interfaces/menuList';
import { UserSessionService } from '../../services/user-session.service';

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
  constructor(private userSession: UserSessionService, private router: Router) {}

  logout() {
    this.userSession.logoutUser();
    this.router.navigateByUrl('login-home');
  }

}
