import { Component } from '@angular/core';
import { FactorySidebarComponent } from '../../components/factory-sidebar/factory-sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-home',
  standalone: true,
  imports: [FactorySidebarComponent, RouterOutlet],
  templateUrl: './product-home.component.html',
  styleUrl: './product-home.component.css'
})
export class ProductHomeComponent {

}
