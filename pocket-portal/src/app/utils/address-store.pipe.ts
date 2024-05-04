import {
  Pipe,
  PipeTransform,
} from '@angular/core';

import { FactoryItemStore } from '../interfaces';
import { FormFactoryUtils } from './FormFactoryUtils';

@Pipe({
  name: 'addressStore',
  standalone: true
})
export class AddressStorePipe implements PipeTransform {


  transform(value: FactoryItemStore | undefined | null, column?: boolean, ...args: unknown[]): unknown {
    if (value) {
      if (column) {
        return FormFactoryUtils.buildAddressColumn(value);  
      }
      return FormFactoryUtils.buildAddress(value);
    }

    return "";
  }

}
