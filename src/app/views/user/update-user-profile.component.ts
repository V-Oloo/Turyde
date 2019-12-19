import { CompanyService } from './../../services/company.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user-profile',
  templateUrl: './update-user-profile.component.html',
  styles: []
})
export class UpdateUserProfileComponent implements OnInit {

  constructor(private service: CompanyService, private fb: FormBuilder, private _route: ActivatedRoute, ) { }
  id = this._route.snapshot.paramMap.get('id');

  userProfileForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.userProfileForm = this.fb.group({
        id: [],
        avator: ['', []],
        firstName: ['', []],
        lastName: ['', []],
        phoneNumber: ['', []],
        email: ['', []],
        roles: [[''], []],
    });
    this._route.data.subscribe((data: { user: any }) => {
         console.log(data.user);
         this.editUser(data.user);
      });
  }

  onSubmit(data) {
    this.submitted = true;
     this.service.updateUser(data)
        .subscribe();
   }

  onFileSelected(fileInput: any) {
    const file = <File>fileInput.target.files[0];
    this.userProfileForm.patchValue({
      avator: file
    });
    this.userProfileForm.get('image').updateValueAndValidity();
  }

  editUser(data: any) {
    this.userProfileForm.patchValue({
     id: this.id,
     avator: data.avator,
     firstName: data.firstName,
     lastName: data.lastName,
     phoneNumber: data.phoneNumber,
     email: data.email,
     roles: data.roles
    });
  }

  get fname() {
    return this.userProfileForm.get('firstName');
  }

  get lname() {
    return this.userProfileForm.get('lastName');
  }

  get email() {
    return this.userProfileForm.get('email');
  }

  get pnumber() {
    return this.userProfileForm.get('PhoneNumber');
  }

}
