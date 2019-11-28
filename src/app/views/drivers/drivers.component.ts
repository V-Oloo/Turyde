import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: []
})
export class DriversComponent implements OnInit {
  createUser: FormGroup;
  @ViewChild('myModal') public myModal: ModalDirective;
  dtOptions: DataTables.Settings = {};

  public status = 'suspended';
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // vehicle form starts here
    this.createUser = this.fb.group ({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phoneNumber: [''],
      email: ['', [Validators.required]],
      boundary: ['', [Validators.required]],
    });

    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }
}
