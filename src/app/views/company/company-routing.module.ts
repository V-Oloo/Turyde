import { UpdateCompanyComponent } from './update-company.component';
import { VehiclesComponent } from './vehicles.component';
import { DriversComponent } from './drivers.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Company'
    },
    children: [
      {
        path: '',
        redirectTo: 'drivers'
      },
      {
        path: 'update-company',
        component: UpdateCompanyComponent,
        data: {
          title: 'Update Company'
        }
      },
      {
        path: 'vehicles',
        component: VehiclesComponent,
        data: {
          title: 'vehicles'
        }
      },
      {
        path: 'drivers',
        component: DriversComponent,
        data: {
          title: 'drivers'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
