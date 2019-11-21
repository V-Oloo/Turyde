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
    username: '',
    password: ''
  };

  public errMessage;

  dismissible = true;
  alerts: any = [
    {
      type: 'success',
      msg: `You successfully read this important alert message.`
    },
    {
      type: 'info',
      msg: `This alert needs your attention, but it's not super important.`
    },
    {
      type: 'danger',
      msg: `Better check yourself, you're not looking too good.`
    }
  ];


  constructor(private _service: AuthService, private _router: Router) { }

    ngOnInit() {}

    loginUser() {
      this._service.loginUser(this.loginForm).subscribe(
        (res: any) => {
          if (res) {
            localStorage.setItem('JWT_TOKEN', res.accessToken);
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
