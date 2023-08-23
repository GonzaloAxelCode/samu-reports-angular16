import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/inicio').then((m) => m.InicioModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth').then((m) => m.AuthModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home').then((m) => m.HomeModule),
  },
  {
    path: 'upload',
    loadChildren: () =>
      import('./modules/uploadcsv').then((m) => m.UploadcsvModule),
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('./modules/reports').then((m) => m.ReportsModule),
  },
  {
    path: 'settings',
    loadChildren: () => import('./modules/user').then((m) => m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
