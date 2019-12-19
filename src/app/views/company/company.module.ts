import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';

import { CompanyRoutingModule } from './company-routing.module';
import { RoutesComponent } from './routes.component';
import { UpdateCompanyComponent } from './update-company.component';
import { CompanyDashboardComponent } from './company-dashboard.component';
import { AssignRouteComponent } from './assign-route.component';
import { CompanyResolverService } from './company-resolver.service';
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';

@NgModule({
  declarations: [
    RoutesComponent,
    UpdateCompanyComponent,
    CompanyDashboardComponent,
    AssignRouteComponent],
  imports: [
    CompanyRoutingModule,
    SharedModule,
    InternationalPhoneNumberModule,
  ],
  providers: [CompanyResolverService]
})
export class CompanyModule { }
