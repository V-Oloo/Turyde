import { Company } from '../../_models/company.model';
import { Component, OnInit } from '@angular/core';
import { navItems } from '../../_nav';
import { adminNavItems } from '../../_admin-nav';
import { AuthService } from '../../services/auth.service';
import { Event, NavigationStart, NavigationEnd, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems = navItems;
  public adminNav = adminNavItems;
  company: Company;

  showLoadingIndicator = true;
  constructor(private auth: AuthService, private _route: Router, private spinner: NgxSpinnerService) {
    this._route.events.subscribe((routerEvent: Event) => {
       if (routerEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
        this.spinner.show();
       }

       if (routerEvent instanceof NavigationEnd) {
        this.showLoadingIndicator = true;
        this.spinner.hide();
      }

    } );
  }

  loggedUser = this.auth.userValue;
  boundary: string = this.loggedUser.boundary;
  fullname: string = this.loggedUser.fullName;


  ngOnInit(): void {
    // this.getCompany();
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

}
