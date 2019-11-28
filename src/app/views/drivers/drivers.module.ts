import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';

import { DriversRoutingModule } from './drivers-routing.module';
import { DriversComponent } from './drivers.component';
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';


@NgModule({
  declarations: [DriversComponent],
  imports: [
    SharedModule,
    DriversRoutingModule,
    InternationalPhoneNumberModule,
  ]
})
export class DriversModule { }
