import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';

import { CompanyRoutingModule } from './company-routing.module';
import { RoutesComponent } from './routes.component';
import { UpdateCompanyComponent } from './update-company.component';
import { UserProfileComponent } from './user-profile.component';
import { CompanyDashboardComponent } from './company-dashboard.component';



@NgModule({
  declarations: [RoutesComponent, UpdateCompanyComponent, UserProfileComponent, CompanyDashboardComponent],
  imports: [
    CompanyRoutingModule,
    SharedModule
  ]
})
export class CompanyModule { }
