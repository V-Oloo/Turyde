import { AuthService } from './../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styles: []
})
export class CompanyDashboardComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  users: {};
  company;
  companyName;
  dtTrigger: Subject<any> = new Subject();

  constructor(private _route: ActivatedRoute) {}

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

  }

  ngOnDestroy() {
    // Do not forget to unsubscribe the event
    // this.dtTrigger.unsubscribe();
  }

}
