import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { zeccaList } from '../../interfaces/menuList';
import { UserSessionService } from '../../services/user-session.service';


@Component({
  selector: 'app-zecca-dashboard',
  standalone: true,
  imports: [NgClass,  NgFor, RouterLink],
  templateUrl: './zecca-dashboard.component.html',
  styleUrl: './zecca-dashboard.component.css'
})
export class ZeccaDashboardComponent {
  components = zeccaList.filter((component) => !!component.card);
  constructor(private userSession: UserSessionService, private router: Router) {}

  logout() {
    this.userSession.logoutUser();
    this.router.navigateByUrl('login-home');
  }

}
