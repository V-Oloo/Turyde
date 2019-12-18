import { VehicleDocsComponent } from './vehicle-docs.component';
import { SingleVehicleResolverService } from './single-vehicle-resolver.service';
import { VehicleResolverService } from './vehicle-resolver.service';
import { AddVehicleComponent } from './add-vehicle.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiclesComponent } from './vehicles.component';
import { VehicleDetailsComponent } from './vehicle-details.component';
import { UpdateVehicleComponent } from './update-vehicle.component';
import { VehicleTypeResolverService } from './vehicle-type-resolver.service';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Vehicles'
    },
    children: [
      {
        path: '',
        redirectTo: 'vehicles'
      },
      {
        path: 'vehicles',
        component: VehiclesComponent,
        resolve: {vehicles: VehicleResolverService},
        data: {
          title: 'vehicles'
        }
      },
      {
        path: 'add-vehicle',
        component: AddVehicleComponent,
        data: {
          title: 'Add vehicle'
        }
      },
      {
        path: 'vehicle-details/:id',
        component: VehicleDetailsComponent,
        resolve: {singleVehicle: SingleVehicleResolverService},
        data: {
          title: 'vehicle Details'
        }
      },
      {
        path: 'update-vehicle/:id',
        component: UpdateVehicleComponent,
        resolve: {singleVehicle: SingleVehicleResolverService, vehicleType: VehicleTypeResolverService},
        data: {
          title: 'Update Vehicle'
        }
      },
      {
        path: 'vehicleDocs/:id',
        component: VehicleDocsComponent,
        resolve: {},
        data: {
          title: 'Upload Vehicle Documents'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
