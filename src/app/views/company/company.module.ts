import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';

import { CompanyRoutingModule } from './company-routing.module';
import { VehiclesComponent } from './vehicles.component';
import { DriversComponent } from './drivers.component';
import { RoutesComponent } from './routes.component';
import { VehicleDetailComponent } from './vehicle-detail.component';
import { UpdateCompanyComponent } from './update-company.component';



@NgModule({
  declarations: [VehiclesComponent, DriversComponent, RoutesComponent, VehicleDetailComponent, UpdateCompanyComponent],
  imports: [
    CompanyRoutingModule,
    SharedModule
  ]
})
export class CompanyModule { }
