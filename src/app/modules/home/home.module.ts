import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';

import { HomeOutletComponent } from './home-outlet/home-outlet.component';
import { SidebarHomeComponent } from 'src/app/components/sidebar-home/sidebar-home.component';

import { RouterLink, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TuiButtonModule } from '@taiga-ui/core';

@NgModule({
  declarations: [HomeComponent, HomeOutletComponent, SidebarHomeComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeOutletComponent,
        canActivate: [AuthGuard],
        children: [
          { path: '', component: DashboardComponent },
          {
            path: 'dashboard',
            loadChildren: () =>
              import('./dashboard/dashboard.module').then(
                (m) => m.DashboardModule
              ),
          },
          {
            path: 'listmodels',
            loadChildren: () =>
              import('./listmodels/listmodels.module').then(
                (m) => m.ListmodelsModule
              ),
          },
          {
            path: 'upload/:id',
            loadChildren: () =>
              import('./listmodels/upload/upload.module').then(
                (m) => m.UploadModule
              ),
          },
          {
            path: 'profile',
            loadChildren: () =>
              import('./profile/profile.module').then((m) => m.ProfileModule),
          },
          {
            path: 'reports',
            loadChildren: () =>
              import('./reports/reports.module').then((m) => m.ReportsModule),
          },
          {
            path: 'manage-users',
            loadChildren: () =>
              import('./manage-users/manage-users.module').then(
                (m) => m.ManageUsersModule
              ),
          },
          {
            path: 'settings',
            loadChildren: () =>
              import('./settings/settings.module').then(
                (m) => m.SettingsModule
              ),
          },
        ],
      },
    ]),
    TuiButtonModule,
    CommonModule,
    RouterLink,
  ],
})
export class HomeModule {}
