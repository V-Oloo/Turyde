import { SignUp } from './../_models/registration.model';
import { Login } from './../_models/login.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly _BaseUri = 'http://dev.turyde.com/api/v1';
  private readonly JWT_TOKEN = 'accessToken';

  constructor(private http: HttpClient) { }

  isLoggedIn(): boolean {
    return !!this.getJwtToken();
  }

  registerUser(user: SignUp) {
     return this.http.post<any>(this._BaseUri + '/users/signup' , user);
  }

  loginUser(user: Login) {
    return this.http.post<any>(this._BaseUri, user);
  }

  getJwtToken() {
    return localStorage.getItem('JWT_TOKEN');
  }

}
