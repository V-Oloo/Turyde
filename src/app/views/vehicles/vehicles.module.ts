import { SingleVehicleResolverService } from './single-vehicle-resolver.service';
import { VehicleResolverService } from './vehicle-resolver.service';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesComponent } from './vehicles.component';
import { VehicleDetailsComponent } from './vehicle-details.component';
import { UpdateVehicleComponent } from './update-vehicle.component';
import { AddVehicleComponent } from './add-vehicle.component';
import { VehicleTypeResolverService } from './vehicle-type-resolver.service';


@NgModule({
  declarations: [VehiclesComponent, VehicleDetailsComponent, UpdateVehicleComponent, AddVehicleComponent],
  imports: [
    SharedModule,
    VehiclesRoutingModule
  ],
  providers: [VehicleResolverService, SingleVehicleResolverService, VehicleTypeResolverService]
})
export class VehiclesModule { }
