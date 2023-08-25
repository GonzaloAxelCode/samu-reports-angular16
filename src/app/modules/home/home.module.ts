import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';

import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiInputFilesModule, TuiToggleModule } from '@taiga-ui/kit';
import { AnycomponentComponent } from 'src/app/components/anycomponent';
import { ChartbarComponent } from 'src/app/components/chartbar/chartbar.component';
import { HomeRoutingModule } from './home-routing.routing';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, ChartbarComponent, AnycomponentComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TuiTableModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    FormsModule,
    TuiInputFilesModule,
    TuiToggleModule,
  ],
})
export class HomeModule {}
