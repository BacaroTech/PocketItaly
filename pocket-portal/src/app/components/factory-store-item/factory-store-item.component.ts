import {
  Component,
  Input,
} from '@angular/core';
import { Router } from '@angular/router';

import { FactoryItemStore } from 'src/app/interfaces';
import { AddressStorePipe } from 'src/app/utils';

@Component({
    selector: 'app-factory-store-item',
    standalone: true,
    templateUrl: './factory-store-item.component.html',
    styleUrl: './factory-store-item.component.css',
    imports: [AddressStorePipe]
})
export class FactoryStoreItemComponent {
  
  @Input()
  store!: FactoryItemStore;

  constructor(private router: Router) { }

  openDetail(item: FactoryItemStore) {
    this.router.navigateByUrl('factory/store/' + item.id)
  }
}
