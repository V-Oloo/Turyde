import { AuthService } from './../../services/auth.service';
import { SignUp } from './../../_models/registration.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
  public errMessage: string;
  public successMessage: string;

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private service: AuthService) { }

  get email() {
    return this.registrationForm.get('email');
  }

  get mobile() {
    return this.registrationForm.get('mobileNumber');
  }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email ]],
      mobileNumber: ['', [Validators.required]],
      boundary: ['COMPANY'],
    });
  }

  onSubmit(form: SignUp) {
    if (this.registrationForm.valid) {

      this.service.registerUser(form).subscribe((res: any) => {
        if (res) {
          this.successMessage = 'Confrimation Mail has been sent to your account.';
          localStorage.setItem('JWT_TOKEN', res.accessToken);
        }

      },
      (err: any) => {
        console.log(err);
      }
    );

    }

  }

}
