import { UserProfileResolverService } from './user-profile-resolver.service';
import { AssignRouteComponent } from './assign-route.component';
import { RoutesComponent } from './routes.component';
import { CompanyDashboardComponent } from './company-dashboard.component';
import { UserProfileComponent } from './user-profile.component';
import { UpdateCompanyComponent } from './update-company.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersResolverService } from './users-resolver.service';
import { CompanyResolverService } from './company-resolver.service';


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
        resolve: {usersList: UsersResolverService, company: CompanyResolverService},
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
        path: 'user-profile/:id',
        component: UserProfileComponent,
        resolve: {user: UserProfileResolverService},
        data: {
          title: 'User Profile'
        }
      },
      {
        path: 'routes',
        component: RoutesComponent,
        data: {
          title: 'Routes'
        }
      },
      {
        path: 'add-route',
        component: AssignRouteComponent,
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
