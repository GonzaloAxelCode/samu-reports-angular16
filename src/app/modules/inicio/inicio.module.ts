import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  TuiTextfieldControllerModule,
  tuiNotificationOptionsProvider,
} from '@taiga-ui/core';
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core/components';
import {
  TuiCheckboxLabeledModule,
  TuiInputModule,
  TuiInputPasswordModule,
} from '@taiga-ui/kit';
import { LoginComponent } from 'src/app/components/login/login.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';

@NgModule({
  declarations: [InicioComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    InicioRoutingModule,
    FormsModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiInputPasswordModule,
    TuiCheckboxLabeledModule,
    TuiLinkModule,
    TuiButtonModule,
    TuiTextfieldControllerModule,
  ],
  providers: [
    tuiNotificationOptionsProvider({
      autoClose: 1000,
    }),
  ],
})
export class InicioModule {}
