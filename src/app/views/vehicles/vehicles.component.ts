import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Vehicle } from '../../_models/vehicle.model';


@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};

  vehicles: {};

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {

    // angular datatable configuration
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this._route.data.subscribe((data: {vehicles: Vehicle}) => {
      this.vehicles = data.vehicles;
    });
  }

  ngOnDestroy(): void {
  }

}
