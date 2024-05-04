import {
  Component,
  Input,
} from '@angular/core';

import { FactoryItemWarehouse } from 'src/app/interfaces';

@Component({
  selector: 'app-factory-warehouse-item',
  standalone: true,
  imports: [],
  templateUrl: './factory-warehouse-item.component.html',
  styleUrl: './factory-warehouse-item.component.css'
})
export class FactoryWarehouseItemComponent {

  @Input()
  item!: FactoryItemWarehouse
}
