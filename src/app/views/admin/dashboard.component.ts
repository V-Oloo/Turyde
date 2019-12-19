import { AuthService } from './../../services/auth.service';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  users: {};

  constructor(private _route: ActivatedRoute,  private router: Router) {}
  returnUrl = this.router.url;
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this._route.data.subscribe((data: { usersList: any }) => {
      this.users = data.usersList;

   });
  }

}

