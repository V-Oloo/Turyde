import { VehicleService } from './../../services/vehicle.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Vehicle } from '../../_models/vehicle.model';


@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  addVehicleForm: FormGroup;

  @ViewChild('largeModal') public largeModal: ModalDirective;
  dtOptions: DataTables.Settings = {};
  public exampleData: Array<object>;
  public option: Array<object>;
  // public options: Options;

  config = {
    displayKey: 'type', // if objects array passed which key to be displayed defaults to description
    bindKey: 'id',
    search: true,
    placeholder: 'Select Vehicle Type',
  };


  constructor(private fb: FormBuilder, private _service: VehicleService) {}

  ngOnInit(): void {
    // vehicle form starts here
    this.addVehicleForm = this.fb.group ({
      regNo: ['', [Validators.required]],
      vehicleTypeId: ['', [Validators.required]],
      companyId: [''],
      seats: ['', [Validators.required]],
      manufYear: ['', [Validators.required]],
      mileage: ['', [Validators.required]],
      userId: ['', [Validators.required]],
      id: ['', [Validators.required]],
      status: ['', [Validators.required]],
    });

    // angular datatable configuration
    this.dtOptions = {
      pagingType: 'full_numbers'
    };

    // get vehicle type array object
    this._service.vehicleType().subscribe(res => {
      this.option = res;
    });

  }

  onSubmit(form: Vehicle) {
   // if (this.addVehicleForm.valid) {
      this._service.createVehicle(form).subscribe((res: any) => {
        if (res) {
          console.log(res);
        }
      },
      (err: any) => {console.log(err); }
    );

    // }
  }

}
