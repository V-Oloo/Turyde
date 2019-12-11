import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { VehicleService } from '../../services/vehicle.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styles: []
})
export class AddVehicleComponent implements OnInit {
  addVehicleForm: FormGroup;
  public option: {};

  currentUser = this.auth.currentUserValue;
  companyId: number = this.currentUser.companyId;

  constructor(private fb: FormBuilder, private _service: VehicleService, private auth: AuthService,  private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.addVehicleForm = this.fb.group ({
      'regNo': ['', [Validators.required]],
      'vehicleTypeId': ['', [Validators.required]],
      'companyId': [this.companyId, ],
      'seats': ['', [Validators.required]],
      'manufYear': ['', [Validators.required]],
      'mileage': ['', [Validators.required]],
    });

     // get vehicle type array object
     this._service.vehicleType().subscribe(res => {
      this.option = res;
    });

  }

  onSubmit() {
    const values = this.addVehicleForm.value;

   if (this.addVehicleForm.valid) {
      this._service.createVehicle(this.addVehicleForm.value).subscribe((res: any) => {
        if (res) {
          this.toastr.success('Vehicle added successfully!', 'Vehicle Added');
          this.router.navigate(['/vehicles/vehicles']);
        }
      },
      (err: any) => {console.log(err); }
    );

    }
  }

}
