import { Component } from '@angular/core';
import { FactorySidebarComponent } from '../../components/factory-sidebar/factory-sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-factory-home',
  standalone: true,
  imports: [FactorySidebarComponent, RouterOutlet],
  templateUrl: './factory-home.component.html',
  styleUrl: './factory-home.component.css'
})
export class FactoryHomeComponent {

}
