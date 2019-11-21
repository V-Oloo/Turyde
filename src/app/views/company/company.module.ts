import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';

import { CompanyRoutingModule } from './company-routing.module';
import { VehiclesComponent } from './vehicles.component';
import { DriversComponent } from './drivers.component';
import { RoutesComponent } from './routes.component';



@NgModule({
  declarations: [VehiclesComponent, DriversComponent, RoutesComponent],
  imports: [
    CompanyRoutingModule,
    SharedModule
  ]
})
export class CompanyModule { }
