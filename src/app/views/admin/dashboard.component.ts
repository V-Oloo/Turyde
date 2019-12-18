import { AuthService } from './../../services/auth.service';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  constructor(private auth: AuthService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  //  this.route.data.subscribe((data: {companyList: Company}) => {
  //     this.companies = data.companyList;
  //  });
  }

}

