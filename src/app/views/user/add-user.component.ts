import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DriverService } from '../../services/driver.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: []
})
export class AddUserComponent implements OnInit {

  public option: {};
  returnUrl: string;

  createUser: FormGroup;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private auth: AuthService,
    private route: ActivatedRoute
    ) { }

    currentUser = this.auth.userValue;
    boundary = this.currentUser.boundary;

    loading = false;

  ngOnInit() {
    // vehicle form starts here
    this.createUser = this.fb.group ({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phoneNumber: [''],
      email: ['', [Validators.required]],
      boundary: [this.boundary, ],
      roles: [['DRIVER']],
    });

    this.option = [
      {id: 1, role: 'ADMIN'},
      {id: 2, role: 'CLERCK'},
      {id: 3, role: 'DRIVER'}
    ];

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    this.loading = true;
     this.auth.addUser(this.createUser.value).subscribe(res => {
                this.loading = false;
                this.toastr.success('User added successfully!', 'Success');
                this.router.navigate([this.returnUrl]);
              },
              err => {
                console.log(err);
               });
  }

}
