import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';

import { DriversRoutingModule } from './drivers-routing.module';
import { DriversComponent } from './drivers.component';
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';
import { AddDriverComponent } from './add-driver.component';
import { UploadDriverDocComponent } from './upload-driver-doc.component';


@NgModule({
  declarations: [DriversComponent, AddDriverComponent, UploadDriverDocComponent],
  imports: [
    SharedModule,
    DriversRoutingModule,
    InternationalPhoneNumberModule,
  ]
})
export class DriversModule { }
