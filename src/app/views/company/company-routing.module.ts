import { RoutesComponent } from './routes.component';
import { CompanyDashboardComponent } from './company-dashboard.component';
import { UserProfileComponent } from './user-profile.component';
import { UpdateCompanyComponent } from './update-company.component';
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
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: CompanyDashboardComponent,
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'update-company',
        component: UpdateCompanyComponent,
        data: {
          title: 'Update Company'
        }
      },
      {
        path: 'user-profile',
        component: UserProfileComponent,
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
