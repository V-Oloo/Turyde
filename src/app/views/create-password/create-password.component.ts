import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../shared/password.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styles: []
})
export class CreatePasswordComponent implements OnInit {

  passwordCreationForm: FormGroup;
  submitted = false;
  errMessage: string;

  constructor(private fb: FormBuilder, private service: AuthService, private _router: Router) { }

  get token() {
    return this.passwordCreationForm.get('token');
  }

  get password() {
    return this.passwordCreationForm.get('password');
  }

  get confirmPass() {
    return this.passwordCreationForm.get('confirmPass');
  }

  ngOnInit() {
    this.passwordCreationForm = this.fb.group({
      token: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPass: ['', [Validators.required]],
      userId: ['2afed38e-4d43-4990-8bbb-71dd233b6d94'],
    }, { validator: MustMatch('password', 'confirmPass')});
  }

  // convenience getter for easy access to form fields
  get f() { return this.passwordCreationForm.controls; }

  passwordSubmit() {
    this.submitted = true;

    if (this.passwordCreationForm.invalid) {
      return;
    }
    const data = this.passwordCreationForm.value;
    this.service.createPassword({password: data.password, token: data.token, userId: data.userId }).subscribe((res: any) => {
      if (res) {
        // this.successMessage = 'Confrimation Mail has been sent to your account.';
        localStorage.setItem('JWT_TOKEN', res.token);
        this._router.navigateByUrl('/register_company');
      }

    },
    (err: any) => {
      this.errMessage = err.error.errorMessage;
      console.log(err);
    }
  );

  }

}
