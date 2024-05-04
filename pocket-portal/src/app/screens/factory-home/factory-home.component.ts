import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FactorySidebarComponent } from 'src/app/components';

@Component({
  selector: 'app-factory-home',
  standalone: true,
  imports: [FactorySidebarComponent, RouterOutlet],
  templateUrl: './factory-home.component.html',
  styleUrl: './factory-home.component.css'
})
export class FactoryHomeComponent {

}
