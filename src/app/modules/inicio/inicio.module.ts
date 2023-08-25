import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';

@NgModule({
  declarations: [InicioComponent],
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
    TuiSvgModule,
  ],
  providers: [
    tuiNotificationOptionsProvider({
      autoClose: 1000,
    }),
  ],
})
export class InicioModule {}
