import { Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';

export const routesPrivate: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'map',
    loadComponent: () =>
      import('./screens/map/map.component').then(
        (mod) => mod.MapComponent,
      ),
  },
  {
    path: 'report',
    loadComponent: () =>
      import('./screens/report/report.component').then(
        (mod) => mod.ReportComponent,
      ),
  },
];

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./screens/login/login.component').then(
        (mod) => mod.LoginComponent,
      ),
  },
  // {
  //   path: 'home',

  // }
]
