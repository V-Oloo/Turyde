import { CompanyRoutesResolverService } from './company-routes-resolver.service';
import { SingleRouteResolverService } from './single-route-resolver.service';
import { RouteResolverService } from './route-resolver.service';
import { AssignRouteComponent } from './assign-route.component';
import { RoutesComponent } from './routes.component';
import { CompanyDashboardComponent } from './company-dashboard.component';
import { UpdateCompanyComponent } from './update-company.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyResolverService } from './company-resolver.service';
import { CompanyUsersResolverService } from './company-users-resolver.service';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Company'
    },
    children: [
      {
        path: '',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: CompanyDashboardComponent,
        resolve: {usersList: CompanyUsersResolverService, company: CompanyResolverService},
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'update-company',
        component: UpdateCompanyComponent,
        resolve: {company: CompanyResolverService},
        data: {
          title: 'Update Company'
        }
      },
      {
        path: 'routes',
        component: RoutesComponent,
        resolve: {route: RouteResolverService, companyRoutes: CompanyRoutesResolverService},
        data: {
          title: 'Routes'
        }
      },
      {
        path: 'add-route/:id',
        component: AssignRouteComponent,
        resolve: {route: SingleRouteResolverService},
        data: {
          title: 'Add Company Route'
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
