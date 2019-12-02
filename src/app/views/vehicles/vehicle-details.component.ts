import { Component, OnInit, ViewChild } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Vehicle } from '../../_models/vehicle.model';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styles: [

  ]
})
export class VehicleDetailsComponent implements OnInit {

  public option: Array<object>;

  vehicle: any;

  constructor( private _service: VehicleService, private route: ActivatedRoute) { }

  ngOnInit() {
     // get vehicle type array object
     this._service.vehicleType().subscribe(res => {
      this.option = res;
    });
    this.getVehicle();
  }

  getVehicle() {
    const id = +this.route.snapshot.paramMap.get('id');
    return this._service.getVehicle(id).subscribe((data: Vehicle) => {this.vehicle = data.vehicle; });
  }

}
