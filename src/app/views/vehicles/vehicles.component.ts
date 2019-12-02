import { VehicleService } from './../../services/vehicle.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};

  currentUser = this.auth.currentUserValue;
  companyId: number = this.currentUser.companyId;

  vehicles: [];

   dtTrigger: Subject<any> = new Subject();

  constructor(private _service: VehicleService, private auth: AuthService) {}

  ngOnInit(): void {

    // angular datatable configuration
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this._service.getVehicles(this.companyId).subscribe(vehicles => {
      this.vehicles = vehicles;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
