import { Company } from '../../_models/company.model';
import { Component, OnInit } from '@angular/core';
import { navItems } from '../../_nav';
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

  currentUser = this.auth.currentUserValue;
  companyId: number = this.currentUser.companyId;
  user: string = this.currentUser.roles;


  ngOnInit(): void {
    // this.getCompany();
  }

  // getCompany() {
  //   this._companyService.getCompany(this.companyId).subscribe((data: Company) => this.company = data);
  // }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

}
