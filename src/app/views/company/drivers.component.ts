import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
  @ViewChild('largeModal') public largeModal: ModalDirective;
  dtOptions: DataTables.Settings = {};

  public status = 'suspended';

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };

}

}
