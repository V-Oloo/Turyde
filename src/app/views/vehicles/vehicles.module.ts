import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesComponent } from './vehicles.component';
import { VehicleDetailsComponent } from './vehicle-details.component';
import { UpdateVehicleComponent } from './update-vehicle.component';


@NgModule({
  declarations: [VehiclesComponent, VehicleDetailsComponent, UpdateVehicleComponent],
  imports: [
    SharedModule,
    VehiclesRoutingModule
  ]
})
export class VehiclesModule { }
