import { AddVehicleComponent } from './add-vehicle.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiclesComponent } from './vehicles.component';
import { VehicleDetailsComponent } from './vehicle-details.component';
import { UpdateVehicleComponent } from './update-vehicle.component';


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
        data: {
          title: 'vehicle Details'
        }
      },
      {
        path: 'update-vehicle',
        component: UpdateVehicleComponent,
        data: {
          title: 'Update Vehicle'
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
