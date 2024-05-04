import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
  PortalSidebarComponent,
  ZeccaNavbarComponent,
} from 'src/app/components';

@Component({
  selector: 'app-zecca-home',
  standalone: true,
  imports: [ZeccaNavbarComponent, PortalSidebarComponent, RouterOutlet],
  templateUrl: './zecca-home.component.html',
  styleUrl: './zecca-home.component.css'
})
export class ZeccaHomeComponent {


}
