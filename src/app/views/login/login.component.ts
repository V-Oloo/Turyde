import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Login } from '../../_models/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  public loginForm: Login = {
    email: '',
    password: '',
    channel: 'Admin_APP',
  };

  public errMessage: string;

  constructor(private _service: AuthService, private _router: Router) { }

    ngOnInit() {}

    loginUser() {
      console.log(this.loginForm);
      this._service.loginUser(this.loginForm).subscribe(
        (res: any) => {
          if (res) {
            this._router.navigateByUrl('/dashboard');
          }

        },
        (err: any) => {
          this.errMessage = err.error.message;
          console.log(err);
        }
      );
    }

 }
