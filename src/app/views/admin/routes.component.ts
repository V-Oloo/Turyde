import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styles: []
})
export class RoutesComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  routes = {};

  constructor(
    private route: ActivatedRoute,
    private service: CompanyService,
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
  }

}
