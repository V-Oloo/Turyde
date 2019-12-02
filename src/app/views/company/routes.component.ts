import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {
  @ViewChild('largeModal') public largeModal: ModalDirective;
  dtOptions: DataTables.Settings = {};

  constructor() { }

  ngOnInit() {
     // angular datatable configuration
     this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

}
