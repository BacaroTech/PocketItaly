import { NgClass } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { FactoryItemBatch } from 'src/app/interfaces';

@Component({
  selector: 'app-factory-create-batch-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './factory-create-batch-item.component.html',
  styleUrl: './factory-create-batch-item.component.css'
})
export class FactoryCreateBatchItemComponent {

  @Input()
  item!: FactoryItemBatch

  @Output()
  toogle: EventEmitter<FactoryItemBatch> = new EventEmitter()

  toogleEvent() {
    this.toogle.emit(this.item)
  }
}
