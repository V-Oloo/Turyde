import { AuthService } from './../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MustMatch } from '../../shared/password.validator';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styles: []
})
export class UserProfileComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  company: {};
  submitted = false;

  changePasswordForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private auth: AuthService,
    private _router: Router,
    private toastr: ToastrService,
    ) {}

  userObj: { fullName: any; email: any; phoneNumber: any; roles: any; id: any; boundary: any };
  name: any; email: any; phone: any; roles: any; boundary: any;
  userId: any;
  errMessage: string;
  returnUrl: string;

  get password() {
    return this.changePasswordForm.get('newPassword');
  }

  get confirmPass() {
    return this.changePasswordForm.get('confirmPass');
  }

  get currentPass() {
    return this.changePasswordForm.get('currentPassword');
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.route.data.subscribe((data: { user: any }) => {
      this.userObj = data.user;
      this.name = this.userObj.fullName;
      this.email = this.userObj.email;
      this.phone = this.userObj.phoneNumber;
      this.roles = this.userObj.roles;
      this.userId = this.userObj.id;
      this.boundary = this.userObj.boundary;
      });
      this.changePasswordForm = this.fb.group({
        email: [this.email],
        currentPassword: ['', [Validators.required]],
        newPassword: ['', [Validators.required, Validators.minLength(6)]],
        confirmPass: ['', [Validators.required]],
      }, { validator: MustMatch('newPassword', 'confirmPass')});
  }

  changePassword(data: any) {
    this.submitted = true;

    if (this.changePasswordForm.invalid) {
      return;
    }
    this.auth.changePassword({email: data.email, currentPassword: data.currentPassword, newPassword: data.newPassword })
      .subscribe((res: any) => {
      if (res) {
        // this.successMessage = 'Confrimation Mail has been sent to your account.';
        this.returnUrl = this._router.url;
        this.toastr.success('Password Changed successfully!', 'Success');
        this._router.navigate(['/login'], { queryParams: { returnUrl: this.returnUrl } });
      }

    },
    (err: any) => {
      this.errMessage = err.error.errorMessage;
      console.log(err);
    }
  );
  }

}
