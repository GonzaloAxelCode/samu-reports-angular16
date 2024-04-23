import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadsectionComponent } from '../home/components/headsection/headsection.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeadsectionComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeadsectionComponent, CommonModule],
})
export class SharedModule {}
