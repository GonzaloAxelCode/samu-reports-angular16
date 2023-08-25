import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UploadRoutingModule } from './uploadcsv-routing.module';
import { UploadcsvComponent } from './uploadcsv.component';

@NgModule({
  declarations: [UploadcsvComponent],
  imports: [CommonModule, UploadRoutingModule],
})
export class UploadcsvModule {}
