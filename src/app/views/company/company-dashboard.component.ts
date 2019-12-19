import { AuthService } from './../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styles: []
})
export class CompanyDashboardComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  users: {};
  company;
  companyName;
  boundary;

  constructor(private _route: ActivatedRoute, private router: Router, private auth: AuthService) {}

  currentUser = this.auth.userValue;
  boundry = this.currentUser.boundary;

  returnUrl = this.router.url;
  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers'
    };

    this._route.data.subscribe((data: { usersList: any }) => {
       this.users = data.usersList;

    });

    this._route.data.subscribe((data: {company: any}) => {
        this.company = data.company;
        this.companyName = this.company.shortName;
    });
    console.log(this.boundry);
  }

}
