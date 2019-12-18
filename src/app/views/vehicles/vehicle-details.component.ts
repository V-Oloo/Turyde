import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from '../../_models/vehicle.model';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styles: [

  ]
})
export class VehicleDetailsComponent implements OnInit {

  public option;
  dtOptions: DataTables.Settings = {};

  vehicleObj: any;
  reg; mileage; status; seats; created; manfYear; vehicleId;
  isShowDriver = false;
  isShowRoute = false;

  constructor(private route: ActivatedRoute) { }



  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.route.data.subscribe((data: {singleVehicle: Vehicle}) => {
      this.vehicleObj = data.singleVehicle;
      this.status = this.vehicleObj.status;
      this.seats = this.vehicleObj.seats;
      this.reg = this.vehicleObj.regNo;
      this.mileage = this.vehicleObj.mileage;
      this.created = this.vehicleObj.createdAt;
      this.manfYear = this.vehicleObj.manufYear;
      this.vehicleId = this.vehicleObj.id;
    });
  }
  assignDriverDisplay() {
    this.isShowDriver = !this.isShowDriver;
  }
  assignRouteDisplay() {
    this.isShowRoute = !this.isShowRoute;
  }

}
