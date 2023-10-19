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

@NgModule({
  declarations: [InicioComponent, BannerpresentationComponent, ContactinfoComponent,NavigationComponent, AboutusComponent, ServicesComponent],
  imports: [
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
    TuiCarouselModule
  ],
  providers: [
    tuiNotificationOptionsProvider({
      autoClose: 1000,
    }),
  ],
})
export class InicioModule {}
