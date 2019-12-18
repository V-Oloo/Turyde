import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard.component';
import { RoutesComponent } from './routes.component';
import { CompaniesComponent } from './companies.component';
import { EditRoutesComponent } from './edit-routes.component';


@NgModule({
  declarations: [ DashboardComponent, RoutesComponent, CompaniesComponent, EditRoutesComponent ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
