import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadcsvComponent } from './uploadcsv.component';

const routes: Routes = [
  {
    path: 'upload',
    component: UploadcsvComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
