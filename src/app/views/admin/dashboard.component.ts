import { AuthService } from './../../services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { CompanyService } from '../../services/company.service';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  @ViewChild('myModal') public myModal: ModalDirective;
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

