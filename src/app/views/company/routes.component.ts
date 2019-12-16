import { AuthService } from './../../services/auth.service';
import { CompanyService } from './../../services/company.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { error } from 'protractor';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  routes = {};
  companyRoutes = {};
  currentUser = this.auth.currentUserValue;
  companyId = this.currentUser.companyId;

  constructor(
    private route: ActivatedRoute,
    private service: CompanyService,
    private auth: AuthService,
    private toastr: ToastrService,
    ) { }

  ngOnInit() {
     // angular datatable configuration
     this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.route.data.subscribe((data: { route: any }) => {
      this.routes = data.route;
   });
   this.route.data.subscribe((data: { companyRoutes: any }) => {
    this.companyRoutes = data.companyRoutes;
 });
  }

  revokeRoute (routeId) {
    this.service.revokeCompanyRoute(this.companyId, routeId).subscribe(res => {
      this.toastr.success('Route Removed successfully!', 'Route Added');
    },
    (error: any) => {
      this.toastr.warning('Oops! that did not work, please try again', 'Error');
      console.log(error);
    }
    );
  }

}
