import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordComponent } from './password/password.component';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { ProfileOutletComponent } from './profile-outlet/profile-outlet.component';
import { HeadsectionComponent } from '../components/headsection/headsection.component';
import { InformacionComponent } from './informacion/informacion.component';
import { EditPerfilComponent } from './edit-perfil/edit-perfil.component';
import { AccountComponent } from './account/account.component';
import { SecurityComponent } from './security/security.component';
import { HistoryComponent } from './history/history.component';
import {
  TuiInputModule,
  TuiSortCountriesPipe,
  TuiSortCountriesPipeModule,
} from '@taiga-ui/kit';
import { TuiInputDateModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiInputFilesModule } from '@taiga-ui/kit';
import { TuiInputPasswordModule } from '@taiga-ui/kit';
import { TuiInputPhoneModule } from '@taiga-ui/kit';
import { TuiInputPhoneInternationalModule } from '@taiga-ui/kit';
import { TuiTextAreaModule } from '@taiga-ui/kit';
import {
  TuiButtonModule,
  TuiDialogModule,
  TuiLabelModule,
  TuiScrollbarModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { TuiGroupModule } from '@taiga-ui/core';
import { SharedModule } from '../../shared/shared.module';
import { TuiMobileCalendarDialogModule } from '@taiga-ui/addon-mobile';
import { ScrollingModule } from '@angular/cdk/scrolling';

import {
  TuiReorderModule,
  TuiTableFiltersModule,
  TuiTableModule,
  TuiTablePaginationModule,
} from '@taiga-ui/addon-table';
import { FormPhotoComponent } from './edit-perfil/components/form-photo/form-photo.component';
@NgModule({
  declarations: [
    PasswordComponent,
    ProfileComponent,
    ProfileOutletComponent,
    InformacionComponent,
    EditPerfilComponent,
    AccountComponent,
    SecurityComponent,
    HistoryComponent,
    FormPhotoComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    TuiMobileCalendarDialogModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProfileOutletComponent,
        children: [
          {
            path: 'informacion',
            component: InformacionComponent,
          },
          {
            path: 'password',
            component: PasswordComponent,
          },
          {
            path: 'edit-profile',
            component: EditPerfilComponent,
          },
          {
            path: 'account',
            component: AccountComponent,
          },
          {
            path: 'history',
            component: HistoryComponent,
          },
          {
            path: 'security',
            component: SecurityComponent,
          },

          { path: '', redirectTo: 'informacion', pathMatch: 'full' },
        ],
      },
    ]),
    ReactiveFormsModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiInputDateModule,
    TuiInputFilesModule,
    TuiInputPasswordModule,
    TuiInputPhoneModule,
    TuiTextAreaModule,
    TuiLabelModule,
    TuiButtonModule,
    TuiGroupModule,
    TuiScrollbarModule,
    ScrollingModule,
    TuiReorderModule,
    TuiTableFiltersModule,
    TuiTableModule,
    TuiTablePaginationModule,
    ReactiveFormsModule,
    TuiSortCountriesPipeModule,
    TuiInputPhoneInternationalModule,
    TuiDialogModule,
  ],
})
export class ProfileModule {}
