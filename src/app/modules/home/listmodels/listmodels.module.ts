import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListmodelsComponent } from './listmodels.component';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TuiInputFilesModule } from '@taiga-ui/kit';
import { TuiNavigationModule } from '@taiga-ui/experimental';
import { TuiToggleModule as TuiToggleModuleNew } from '@taiga-ui/experimental';

@NgModule({
  declarations: [ListmodelsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListmodelsComponent,
      },
    ]),
    TuiInputFilesModule,
    FormsModule,
    ReactiveFormsModule,
    TuiNavigationModule,
    TuiToggleModuleNew,
  ],
})
export class ListmodelsModule {}
