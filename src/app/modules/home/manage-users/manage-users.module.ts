import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUsersComponent } from './manage-users.component';
import { ManageUsersOutletComponent } from './manage-users-outlet/manage-users-outlet.component';
import { RouterModule } from '@angular/router';
import { DesactiveUsersComponent } from './desactive-users/desactive-users.component';
import { HeadsectionComponent } from '../components/headsection/headsection.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ManageUsersComponent, ManageUsersOutletComponent],
  imports: [
    SharedModule,
    CommonModule,

    RouterModule.forChild([
      {
        path: '',
        component: ManageUsersOutletComponent,
        children: [
          {
            path: '',
            component: ManageUsersComponent,
          },
          {
            path: 'desactiveusers',
            component: DesactiveUsersComponent,
          },
        ],
      },
    ]),
  ],
})
export class ManageUsersModule {}
