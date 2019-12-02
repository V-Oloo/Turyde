import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styles: []
})
export class CompanyDashboardComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  company: {};

  constructor(private auth: AuthService, private _companyService: CompanyService) {}

  currentUser = this.auth.currentUserValue;
  companyId: number = this.currentUser.companyId;

  ngOnInit(): void {
    // this.getCompany();
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

  getCompany() {
    // console.log('this is the id' + this.companyId);
    this._companyService.getCompany(this.companyId).subscribe(data => this.company = data);
  }

}
