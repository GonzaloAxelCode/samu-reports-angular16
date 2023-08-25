import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrocsvComponent } from './registrocsv.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrocsvComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrocsvRoutingModule {}
