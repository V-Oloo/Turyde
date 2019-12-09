import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-user-profile',
  templateUrl: './update-user-profile.component.html',
  styles: []
})
export class UpdateUserProfileComponent implements OnInit {

  constructor(private service: AuthService, private fb: FormBuilder) { }

  userProfileForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.userProfileForm = this.fb.group({
        id:	['', []],
        avator: ['', []],
        avatorUrl: ['', []],
        mimeType: ['', []],
        firstName: ['', []],
        lastName: ['', []],
        phoneNumber: ['', []],
        email: ['', []],
        fullName: ['', []],
        phoneNumberVerified:	['', []],
        emailVerified: ['', []],
        companyId: ['', []],
        roles: ['', []],
        boundary: ['', []],
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
