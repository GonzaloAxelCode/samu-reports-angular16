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
  TUI_DIALOGS_CLOSE,
  TuiDialogModule,
  TuiRootModule,
} from '@taiga-ui/core';

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
import { MatIconModule } from '@angular/material/icon';
import { TuiPromptModule } from '@taiga-ui/kit';

import { DialogModule } from 'primeng/dialog';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';

@NgModule({
  declarations: [RegistrocsvComponent, TableComponent, FormuploadfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RegistrocsvComponent,
        canActivate: [AuthGuard],
      },
    ]),
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
    MatIconModule,
    TuiDialogModule,
    DialogModule,
    TuiPromptModule,
  ],
})
export class RegistocsvModule {}
