import { UserProfileResolverService } from './user-profile-resolver.service';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';

import { CompanyRoutingModule } from './company-routing.module';
import { RoutesComponent } from './routes.component';
import { UpdateCompanyComponent } from './update-company.component';
import { UserProfileComponent } from './user-profile.component';
import { CompanyDashboardComponent } from './company-dashboard.component';
import { UpdateUserProfileComponent } from './update-user-profile.component';
import { AssignRouteComponent } from './assign-route.component';
import { UsersResolverService } from './users-resolver.service';
import { CompanyResolverService } from './company-resolver.service';
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';



@NgModule({
  declarations: [
    RoutesComponent,
    UpdateCompanyComponent,
    UserProfileComponent,
    CompanyDashboardComponent,
    UpdateUserProfileComponent,
    AssignRouteComponent],
  imports: [
    CompanyRoutingModule,
    SharedModule,
    InternationalPhoneNumberModule,
  ],
  providers: [UsersResolverService, UserProfileResolverService, CompanyResolverService]
})
export class CompanyModule { }
