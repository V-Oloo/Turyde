import { Globals } from './../global';
import { SignUp } from './../_models/registration.model';
import { Login } from './../_models/login.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {shareReplay, map} from 'rxjs/operators';
import * as moment from 'moment';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT_TOKEN = 'token';

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, private global: Globals) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
      return this.currentUserSubject.value;
  }

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
    return this.http.post<any>(this.global._BaseUri + '/users/login', user)
           .pipe(map(res => {
              if (res && res.result.token) {
                const expiresAt = moment().add(res.result.expires, 'second');
                localStorage.setItem('JWT_TOKEN', res.result.token);
                localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()) );
                localStorage.setItem('currentUser', JSON.stringify(res.result.me.result));
                this.currentUserSubject.next(res.result.me.result);
              }
              return res;
            }),
             shareReplay(),
            );
  }

  logout() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem('expires_at');
    localStorage.removeItem('currentUser');
  }

  getJwtToken() {
    return localStorage.getItem('JWT_TOKEN');
  }


}
