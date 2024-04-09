import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';

import { HomeOutletComponent } from './home-outlet/home-outlet.component';
import { SidebarHomeComponent } from 'src/app/components/sidebar-home/sidebar-home.component';
import { PasswordComponent } from './profile/password/password.component';
import { RouterLink, RouterModule } from '@angular/router';
import { ListmodelsComponent } from './listmodels/listmodels.component';
import { HeadsectionComponent } from './components/headsection/headsection.component';
@NgModule({
  declarations: [HomeComponent, HomeOutletComponent, SidebarHomeComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeOutletComponent,
        children: [
          { path: '', component: HomeComponent },
          {
            path: 'listmodels',
            loadChildren: () =>
              import('./listmodels/listmodels.module').then(
                (m) => m.ListmodelsModule
              ),
          },
          {
            path: 'registro/:id',
            loadChildren: () =>
              import('./registocsv/registocsv.module').then(
                (m) => m.RegistocsvModule
              ),
          },
          {
            path: 'profile',
            loadChildren: () =>
              import('./profile/profile.module').then((m) => m.ProfileModule),
          },
        ],
      },
    ]),
    CommonModule,
    RouterLink,
  ],
})
export class HomeModule {}
