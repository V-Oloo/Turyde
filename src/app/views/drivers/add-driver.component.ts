import { DriverService } from './../../services/driver.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styles: []
})
export class AddDriverComponent implements OnInit {

  createUser: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _service: DriverService,
    private toastr: ToastrService,
    private router: Router,
    ) { }

  ngOnInit() {
    // vehicle form starts here
    this.createUser = this.fb.group ({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phoneNumber: [''],
      email: ['', [Validators.required]],
      boundary: ['COMPANY'],
      roles: ['DRIVER'],
    });
  }

  onSubmit() {
     this._service.addDriver(this.createUser.value).subscribe(res => {
                // console.log(res);
                this.createUser.reset();
                this.toastr.success('Driver added successfully!', 'Driver Added');
                this.router.navigate(['/drivers/drivers']);
              },
              err => {
                console.log(err);
               });
  }

}
