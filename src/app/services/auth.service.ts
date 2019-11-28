import { Globals } from './../global';
import { SignUp } from './../_models/registration.model';
import { Login } from './../_models/login.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {shareReplay, tap} from 'rxjs/operators';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT_TOKEN = 'token';

  constructor(private http: HttpClient, private global: Globals) { }

  isLoggedIn(): boolean {
    return !!this.getJwtToken();
  }

  registerUser(user: SignUp) {
     return this.http.post<any>(this.global._BaseUri + '/users/signup' , user);
  }

  createPassword(user) {
    return this.http.post<any>(this.global._BaseUri + '/users/confirmemail' , user);
 }

  loginUser(user: Login) {
    return this.http.post<any>(this.global._BaseUri, user)
           .pipe(
            // tap(res => this.setSession ),
             shareReplay(),
            );
  }

  logout() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem('expires_at');
  }

  // private setSession(authResult: { expiresIn: moment.DurationInputArg1; token: string; }) {
  //   const expiresAt = moment().add(authResult.expiresIn, 'second');

  //   localStorage.setItem(this.JWT_TOKEN, authResult.token);
  //   localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()) );
  // }

  // public isLoggedIn() {
  //   return !!moment().isBefore(this.getExpiration());
  // }

  // isLoggedOut() {
  //   return !this.isLoggedIn();
  // }

  // getExpiration() {
  //   const expiration = localStorage.getItem('expires_at');
  //   const expiresAt = JSON.parse(expiration);
  //   return moment(expiresAt);
  // }

  getJwtToken() {
    return localStorage.getItem('JWT_TOKEN');
  }

}
