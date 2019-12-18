import { Boundary } from './_models/boundary.model';
import { CreatePasswordComponent } from './views/create-password/create-password.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { RegisterCompanyComponent } from './views/register-company/register-company.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { MainAuthGuard } from './guards/main-auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: LandingpageComponent,
    data: {
      title: 'Home'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [AuthGuard],
    data: {
      title: 'Login Page'
    }
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'register_company',
    component: RegisterCompanyComponent,
    data: {
      title: 'Register company Page'
    }
  },
  {
    path: 'createPassword/:userId/:token',
    component: CreatePasswordComponent,
    data: {
      title: 'Create Password'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],
    // canLoad: [AuthGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'admin',
        canActivate: [AuthGuard],
        data: {
          boundary: [Boundary.Turyde]
        },
        loadChildren: () => import('./views/admin/admin.module').then(m => m.AdminModule)
      },
      {
        path: 'company',
        loadChildren: () => import('./views/company/company.module').then(m => m.CompanyModule)
      },
      {
        path: 'drivers',
        loadChildren: () => import('./views/drivers/drivers.module').then(m => m.DriversModule)
      },
      {
        path: 'vehicles',
        loadChildren: () => import('./views/vehicles/vehicles.module').then(m => m.VehiclesModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
