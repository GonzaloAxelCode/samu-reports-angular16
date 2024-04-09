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
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiInputDateModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiInputFilesModule } from '@taiga-ui/kit';
import { TuiInputPasswordModule } from '@taiga-ui/kit';
import { TuiInputPhoneModule } from '@taiga-ui/kit';
import { TuiInputPhoneInternationalModule } from '@taiga-ui/kit';
import { TuiTextAreaModule } from '@taiga-ui/kit';
import { TuiLabelModule } from '@taiga-ui/core';
import { TuiGroupModule } from '@taiga-ui/core';

@NgModule({
  declarations: [
    PasswordComponent,
    ProfileComponent,
    ProfileOutletComponent,
    HeadsectionComponent,
    InformacionComponent,
    EditPerfilComponent,
    AccountComponent,
    SecurityComponent,
    HistoryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProfileOutletComponent,
        children: [
          {
            path: 'informacion',
            component: ProfileComponent,
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
    TuiInputDateModule,
    TuiInputFilesModule,
    TuiInputPasswordModule,
    TuiInputPhoneModule,
    TuiInputPhoneInternationalModule,
    TuiTextAreaModule,
    TuiLabelModule,
    TuiGroupModule,
  ],
})
export class ProfileModule {}
