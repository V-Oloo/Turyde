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
        path: 'vehicle-details',
        component: VehicleDetailsComponent,
        data: {
          title: 'vehicles Details'
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
