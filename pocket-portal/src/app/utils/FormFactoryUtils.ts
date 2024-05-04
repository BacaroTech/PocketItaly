import {
  CountStep,
  FactoryItemStore,
} from '../interfaces';

export class FormFactoryUtils {
    public static buildAddressColumn(store: FactoryItemStore) {
        return `${store.address}\n${store.city}\n${store.province}\n${store.cap}`
    }
    public static buildAddress(store: FactoryItemStore) {
        return `${store.address} ${store.city} (${store.province}) ${store.cap}`
    }
    public static next(step: CountStep): CountStep {
        switch (step) {
            case 1:
                return 2;
            case 2:
                return 2;
        }
    }
    public static back(step: CountStep): CountStep {
        switch (step) {
            case 1:
                return 1;
            case 2:
                return 1;
        }
    }
}
