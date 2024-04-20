import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from "./components/sidebar/sidebar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, SidebarComponent]
})
export class AppComponent {
  title = 'pocket-portal';
  ngOnInit(): void {
    initFlowbite();
  }
}
