import { EditRoutesComponent } from './edit-routes.component';
import { RoutesComponent } from './routes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CompanyListResolverService } from './company-list-resolver.service';
import { CompaniesComponent } from './companies.component';
import { RouteResolverService } from '../company/route-resolver.service';
import { SingleRouteResolverService } from '../company/single-route-resolver.service';
import { UsersResolverService } from '../user/users-resolver.service';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: {usersList: UsersResolverService},
    data: {
      title: 'Admin Dashboard'
    }
  },
  {
    path: 'companies',
    component: CompaniesComponent,
    resolve: {companyList : CompanyListResolverService},
    data: {
      title: 'Company List'
    }
  },
  {
    path: 'routes',
    component: RoutesComponent,
    resolve: {route : RouteResolverService},
    data: {
      title: 'Routes'
    }
  },
  {
    path: 'edit-route/:id',
    component: EditRoutesComponent,
    resolve: {route : SingleRouteResolverService},
    data: {
      title: 'Edit Route'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
