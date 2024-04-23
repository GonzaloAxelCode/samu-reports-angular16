import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { LayoutFrontOutletComponent } from './outlet/outlet.component';

import { NotificationComponent } from 'src/app/components/notification/notification.component';
import { TuiLoaderModule } from '@taiga-ui/core';
import { AuthGuard } from 'src/app/guards/auth.guard';

@NgModule({
  declarations: [LayoutFrontOutletComponent, NotificationComponent],
  imports: [
    CommonModule,
    TuiLoaderModule,

    RouterModule.forChild([
      {
        path: '',
        component: LayoutFrontOutletComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../inicio/').then((m) => m.InicioModule),
          },
          {
            path: 'home',
            loadChildren: () => import('../home').then((m) => m.HomeModule),
          },
        ],
      },
    ]),
  ],
})
export class LayoutModule {}
