import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';
import {
  TuiReorderModule,
  TuiTableFiltersModule,
  TuiTableModule,
  TuiTablePaginationModule,
} from '@taiga-ui/addon-table';
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiDropdownModule,
  TuiHostedDropdownModule,
  TuiLinkModule,
  TuiLoaderModule,
  TuiScrollbarModule,
  TuiSvgModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
  TuiAccordionModule,
  TuiCheckboxLabeledModule,
  TuiDataListWrapperModule,
  TuiInputCountModule,
  TuiInputFilesModule,
  TuiInputModule,
  TuiInputPasswordModule,
  TuiSelectModule,
  TuiTagModule,
  TuiToggleModule,
} from '@taiga-ui/kit';
import { TuiBlockStatusModule } from '@taiga-ui/layout';
import { FormuploadfileComponent } from 'src/app/components/formuploadfile/formuploadfile.component';
import { TableComponent } from 'src/app/components/table/table.component';
import { RegistrocsvComponent } from './registrocsv.component';
import { RegistrocsvRoutingModule } from './registrocsv.routing';

@NgModule({
  declarations: [RegistrocsvComponent, TableComponent, FormuploadfileComponent],
  imports: [
    CommonModule,
    RegistrocsvRoutingModule,
    TuiInputModule,
    TuiDropdownModule,
    TuiReorderModule,
    TuiHostedDropdownModule,
    TuiInputCountModule,
    TuiLoaderModule,
    TuiTablePaginationModule,
    TuiTableFiltersModule,
    TuiTableModule,
    FormsModule,
    ReactiveFormsModule,
    TuiInputPasswordModule,
    TuiCheckboxLabeledModule,
    TuiLinkModule,
    TuiButtonModule,
    TuiTextfieldControllerModule,
    TuiSvgModule,
    TuiScrollbarModule,
    ScrollingModule,
    TuiInputFilesModule,
    TuiDataListModule,
    TuiAccordionModule,
    TuiDataListWrapperModule,
    TuiMoneyModule,
    TuiSelectModule,
    TuiBlockStatusModule,
    TuiTagModule,
    TuiToggleModule,
  ],
})
export class RegistocsvModule {}
