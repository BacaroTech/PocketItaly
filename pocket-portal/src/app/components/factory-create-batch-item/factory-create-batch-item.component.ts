import {
  Component,
  Input,
} from '@angular/core';

import { FactoryItemWarehouse } from 'src/app/interfaces';

@Component({
  selector: 'app-factory-create-batch-item',
  standalone: true,
  imports: [],
  templateUrl: './factory-create-batch-item.component.html',
  styleUrl: './factory-create-batch-item.component.css'
})
export class FactoryCreateBatchItemComponent {

  @Input()
  item!: FactoryItemWarehouse
}
