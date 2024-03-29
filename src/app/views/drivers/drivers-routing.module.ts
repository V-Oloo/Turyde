import { UploadDriverDocComponent } from './upload-driver-doc.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriversComponent } from './drivers.component';
import { DriverResolverService } from './driver-resolver.service';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Drivers'
    },
    children: [
      {
        path: '',
        redirectTo: 'drivers'
      },
      {
        path: 'drivers',
        component: DriversComponent,
        resolve: {drivers: DriverResolverService},
        data: {
          title: 'drivers'
        }
      },
      {
        path: 'driver-docs/:id',
        component: UploadDriverDocComponent,
        data: {
          title: 'Add Driver Document'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriversRoutingModule { }
