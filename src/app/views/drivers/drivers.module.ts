import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';

import { DriversRoutingModule } from './drivers-routing.module';
import { DriversComponent } from './drivers.component';


@NgModule({
  declarations: [DriversComponent],
  imports: [
    SharedModule,
    DriversRoutingModule
  ]
})
export class DriversModule { }
