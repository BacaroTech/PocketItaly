import { Component, Input } from '@angular/core';
import { FactoryItemStore } from '../../interfaces/models.interface';

@Component({
  selector: 'app-factory-store-item',
  standalone: true,
  imports: [],
  templateUrl: './factory-store-item.component.html',
  styleUrl: './factory-store-item.component.css'
})
export class FactoryStoreItemComponent {
  @Input()
  store!: FactoryItemStore;

}
