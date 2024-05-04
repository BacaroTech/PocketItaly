import {
  NgFor,
  NgIf,
} from '@angular/common';
import { Component } from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import { FactoryPageLayoutComponent } from 'src/app/components';
import { FactoryItemStore } from 'src/app/interfaces';
import { FactoryStoresService } from 'src/app/services';
import { AddressStorePipe } from 'src/app/utils';

@Component({
    selector: 'app-factory-detail-store',
    standalone: true,
    templateUrl: './factory-detail-store.component.html',
    styleUrl: './factory-detail-store.component.css',
    imports: [
        NgIf,
        NgFor,
        FactoryPageLayoutComponent,
        AddressStorePipe
    ]
})
export class FactoryDetailStoreComponent {

  id: number | undefined;
  store: FactoryItemStore | null | undefined = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: FactoryStoresService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = parseInt(params['id']);
      if (this.id) {
        this.service.getStores().subscribe((r) => {
          this.store = r.find(_rItem => _rItem.id === this.id);
        })
      }
    })
  }
  goToWarehouse() {
    this.router.navigateByUrl("factory/warehouse");
  }

  goToUpdate() {
    if (this.store) {
      this.router.navigateByUrl("factory/edit-store/" + this.store.id);
    }
  }

}
