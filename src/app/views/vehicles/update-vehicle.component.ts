import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styles: []
})
export class UpdateVehicleComponent implements OnInit {
  addVehicleForm: FormGroup;
  constructor(private fb: FormBuilder) { }

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
  }

  updateCompany(data) {}

}
