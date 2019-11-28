import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriversComponent } from './drivers.component';


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
export class DriversRoutingModule { }
