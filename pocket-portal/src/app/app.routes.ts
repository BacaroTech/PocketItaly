import { Routes } from '@angular/router';

import {
  FactoryHomeComponent,
} from './screens/factory-home/factory-home.component';
import { ZeccaHomeComponent } from './screens/zecca-home/zecca-home.component';

export const routes: Routes = [
  {
    path: 'home-login',
    loadComponent: () =>
      import('./screens/home-login/home-login.component').then(
        (mod) => mod.HomeLoginComponent,
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./screens/login/login.component').then(
        (mod) => mod.LoginComponent,
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./screens/register/register.component').then(
        (mod) => mod.RegisterComponent,
      ),
  },
  {
    path: 'zecca',
    component: ZeccaHomeComponent,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./screens/zecca-dashboard/zecca-dashboard.component').then(
            (mod) => mod.ZeccaDashboardComponent,
          )
      },
      {
        path: 'map',
        loadComponent: () =>
          import('./screens/zecca-map/zecca-map.component').then(
            (mod) => mod.ZeccaMapComponent,
          )
      },
      {
        path: 'map/:id',
        loadComponent: () =>
          import('./screens/zecca-map-detail/zecca-map-detail.component').then(
            (mod) => mod.ZeccaMapDetailComponent,
          )
      },
      {
        path: 'web-site',
        loadComponent: () =>
          import('./screens/zecca-web-sites/zecca-web-sites.component').then(
            (mod) => mod.ZeccaWebSitesComponent,
          )
      },
      {
        path: 'web-site/:id',
        loadComponent: () =>
          import('./screens/zecca-web-detail/zecca-web-detail.component').then(
            (mod) => mod.ZeccaWebDetailComponent,
          )
      },
      {
        path: 'report',
        loadComponent: () =>
          import('./screens/zecca-report/zecca-report.component').then(
            (mod) => mod.ZeccaReportComponent,
          )
      },
      {
        path: 'report/:id',
        loadComponent: () =>
          import('./screens/zecca-report-full-detail/zecca-report-full-detail.component').then(
            (mod) => mod.ZeccaReportFullDetailComponent,
          )
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: '**',
        redirectTo: '/home',
      },
    ]
  },
  {
    path: 'factory',
    component: FactoryHomeComponent,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./screens/factory-dashboard/factory-dashboard.component').then(
            (mod) => mod.FactoryDashboardComponent,
          )
      },
      {
        path: 'store',
        loadComponent: () =>
          import('./screens/factory-stores/factory-stores.component').then(
            (mod) => mod.FactoryStoresComponent,
          )
      },
      {
        path: 'warehouse',
        loadComponent: () =>
          import('./screens/factory-warehouse/factory-warehouse.component').then(
            (mod) => mod.FactoryWarehouseComponent,
          )
      },
      {
        path: 'create-product',
        loadComponent: () =>
          import('./screens/factory-create-product/factory-create-product.component').then(
            (mod) => mod.FactoryCreateProductComponent,
          )
      },
      {
        path: 'create-store',
        loadComponent: () =>
          import('./screens/factory-create-store/factory-create-store.component').then(
            (mod) => mod.FactoryCreateStoreComponent,
          )
      },
      {
        path: 'store/:id',
        loadComponent: () =>
          import('./screens/factory-detail-store/factory-detail-store.component').then(
            (mod) => mod.FactoryDetailStoreComponent,
          )
      },
      {
        path: 'edit-store/:id',
        loadComponent: () =>
          import('./screens/factory-edit-store/factory-edit-store.component').then(
            (mod) => mod.FactoryEditStoreComponent,
          )
      },
      {
        path: 'create-token',
        loadComponent: () =>
          import('./screens/factory-create-token/factory-create-token.component').then(
            (mod) => mod.FactoryCreateTokenComponent,
          )
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./screens/factory-profile/factory-profile.component').then(
            (mod) => mod.FactoryProfileComponent,
          )
      },
      {
        path: 'check-serial',
        loadComponent: () =>
          import('./screens/factory-check-serial/factory-check-serial.component').then(
            (mod) => mod.FactoryCheckSerialComponent,
          )
      },
      {
        path: 'get-batch',
        loadComponent: () =>
          import('./screens/factory-get-batch/factory-get-batch.component').then(
            (mod) => mod.FactoryGetBatchComponent,
          )
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: '**',
        redirectTo: '/home',
      },
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home-login',
  },
  {
    path: '**',
    redirectTo: '/home-login',
  },

]
