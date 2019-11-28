import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { VehicleService } from '../../services/vehicle.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styles: [

  ]
})
export class VehicleDetailsComponent implements OnInit {

  @ViewChild('myModal') public myModal: ModalDirective;
  public option: Array<object>;

  constructor( private _service: VehicleService) { }

  ngOnInit() {
     // get vehicle type array object
     this._service.vehicleType().subscribe(res => {
      this.option = res;
    });
  }

}
