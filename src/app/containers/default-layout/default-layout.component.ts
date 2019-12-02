import { Company } from './../../_models/create_company.model';
import { Component, OnInit } from '@angular/core';
import { navItems } from '../../_nav';
import { AuthService } from '../../services/auth.service';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems = navItems;
  company = [];

  constructor(private auth: AuthService, private _companyService: CompanyService) {}

  currentUser = this.auth.currentUserValue;
  companyId: number = this.currentUser.companyId;
  user: string = this.currentUser.roles;


  ngOnInit(): void {
    this.getCompany();
  }

  getCompany() {
    this._companyService.getCompany(this.companyId).subscribe(data => this.company = data);
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  // getValues(data) {
  //    this.companyName = data.shortName;
  //    return this.companyName;
  // }
}
