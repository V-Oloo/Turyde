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
  public submitted = false;


  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private service: AuthService) { }

  get email() {
    return this.registrationForm.get('email');
  }

  get mobileNumber() {
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
    this.submitted = true;

    if (this.registrationForm.invalid) {

       return;
    }{

      this.service.registerUser(form).subscribe((res: any) => {
        if (res) {
          this.successMessage = 'Confrimation Mail has been sent to your account.';
          localStorage.setItem('JWT_TOKEN', res.result.token);
        }

      },
      (err: any) => {
        if (err.error.errorMessage) {
          this.errMessage = err.error.errorMessage;
        }
        this.errMessage = 'Something happened please try again';
        console.log(err);
      }
    );

    }

  }

}
