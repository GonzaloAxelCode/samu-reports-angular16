import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiCarouselModule } from '@taiga-ui/kit';

import {
  TuiSvgModule,
  TuiTextfieldControllerModule,
  tuiNotificationOptionsProvider,
} from '@taiga-ui/core';
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core/components';
import {
  TuiCheckboxLabeledModule,
  TuiInputModule,
  TuiInputPasswordModule,
} from '@taiga-ui/kit';
import { NavigationComponent } from 'src/app/components/navigation/navigation.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BannerpresentationComponent } from './components/bannerpresentation/bannerpresentation.component';
import { ContactinfoComponent } from './components/contactinfo/contactinfo.component';
import { ServicesComponent } from './components/services/services.component';
import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { TuiTabsModule } from '@taiga-ui/kit';
import { ActivateaccountComponent } from './components/activateaccount/activateaccount.component';
import { RouterModule } from '@angular/router';

import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { PageActivationGuard } from 'src/app/guards/pageactivation.guard';
import { PageResetPasswordGuard } from 'src/app/guards/pagearesetpassword.guard';
import { ForgotPasswordComponent } from 'src/app/components/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    InicioComponent,
    BannerpresentationComponent,
    ContactinfoComponent,
    NavigationComponent,
    AboutusComponent,
    ServicesComponent,
    LoginComponent,
    RegisterComponent,
    ActivateaccountComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: InicioComponent,
      },
      {
        path: 'activate/:uid/:token',
        component: ActivateaccountComponent,
        canActivate: [PageActivationGuard],
      },
      {
        path: 'password/reset/confirm/:uid/:token',
        component: ResetPasswordComponent,
        canActivate: [PageResetPasswordGuard],
      },
    ]),
    CommonModule,
    ReactiveFormsModule,
    InicioRoutingModule,
    FormsModule,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiCheckboxLabeledModule,
    TuiLinkModule,
    TuiButtonModule,
    TuiTextfieldControllerModule,
    TuiSvgModule,
    TuiCarouselModule,
    TuiTabsModule,
  ],
  providers: [
    tuiNotificationOptionsProvider({
      autoClose: 1000,
    }),
  ],
})
export class InicioModule {}
