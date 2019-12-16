import { VehicleService } from './../../services/vehicle.service';
import { Vehicle } from './../../_models/vehicle.model';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VehicleType } from '../../_models/vehicleType.model';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styles: []
})
export class UpdateVehicleComponent implements OnInit {
  addVehicleForm: FormGroup;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private _service: VehicleService) { }

   public option: {};

  ngOnInit() {
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
    this.route.data.subscribe((data: {vehicleType: VehicleType}) => {
      this.option = data.vehicleType;
  });

    this.route.data.subscribe((data: {singleVehicle: Vehicle}) => {
      this.editVehicle(data.singleVehicle);
    });
  }

  onSubmit(data) {
    this
  }

  editVehicle (data: Vehicle) {
    this.addVehicleForm.patchValue({
      regNo: data.regNo,
      vehicleTypeId: data.vehicleTypeId,
      companyId: data.companyId,
      seats: data.seats,
      manufYear: data.manufYear,
      mileage: data.mileage,
      userId: data.userId,
      id: data.id,
      status: data.status,
    });
  }

}
