import { Component } from '@angular/core';
import { PortalSidebarComponent } from '../../components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ZeccaNavbarComponent } from '../../components/zecca-navbar/zecca-navbar.component';

@Component({
  selector: 'app-zecca-home',
  standalone: true,
  imports: [ZeccaNavbarComponent, PortalSidebarComponent, RouterOutlet],
  templateUrl: './zecca-home.component.html',
  styleUrl: './zecca-home.component.css'
})
export class ZeccaHomeComponent {

}
