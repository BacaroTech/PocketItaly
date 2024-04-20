import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { PortalNavbarComponent } from './components/navbar/navbar.component';
import { PortalSidebarComponent } from "./components/sidebar/sidebar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PortalNavbarComponent, PortalSidebarComponent]
})
export class AppComponent {
  title = 'pocket-portal';
  ngOnInit(): void {
    initFlowbite();
  }
}
