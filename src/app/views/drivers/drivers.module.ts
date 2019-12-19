import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';

import { DriversRoutingModule } from './drivers-routing.module';
import { DriversComponent } from './drivers.component';
import { UploadDriverDocComponent } from './upload-driver-doc.component';


@NgModule({
  declarations: [DriversComponent, UploadDriverDocComponent],
  imports: [
    SharedModule,
    DriversRoutingModule,
  ]
})
export class DriversModule { }
