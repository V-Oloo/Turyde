import { Globals } from './../global';
import { SignUp } from './../_models/registration.model';
import { Login } from './../_models/login.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {shareReplay, map} from 'rxjs/operators';
import * as moment from 'moment';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT_TOKEN = 'token';

  // userContext
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  // user information
  private userSubject: BehaviorSubject<any>;
  public user: Observable<any>;

  helper = new JwtHelperService();

  constructor(private http: HttpClient, private global: Globals) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('userContext')));
    this.currentUser = this.currentUserSubject.asObservable();

    this.userSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.user = this.userSubject.asObservable();
  }

  public get currentUserValue(): any {
      return this.currentUserSubject.value;
  }
  public get currentUserSub(): any {
    return this.currentUserSubject;
}

  public get userValue(): any {
    return this.userSubject.value;
}

  isLoggedIn(): boolean {
    return !!this.getJwtToken();
    // return !this.helper.isTokenExpired(token);
  }

  registerUser(user: SignUp) {
     return this.http.post<any>(this.global._BaseUri + '/users/signup' , user);
  }

  createPassword(user: { password: any; token: any; userId: any; }) {
    return this.http.post<any>(this.global._BaseUri + '/users/confirmemail' , user);
 }

  loginUser(user: Login) {
    return this.http.post<any>(this.global._BaseUri + '/users/login', user)
           .pipe(map(res => {
              if (res && res.result.token) {
                const userContext = {'companyId': res.result.me.companyId, 'boundary': res.result.me.boundary };
                const expiresAt = moment().add(res.result.expires, 'second');
                localStorage.setItem('JWT_TOKEN', res.result.token);
                localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()) );
                localStorage.setItem('currentUser', JSON.stringify(res.result.me));
                localStorage.setItem('userContext', JSON.stringify(userContext));
                this.currentUserSubject.next(userContext);
                this.userSubject.next(res.result.me);
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
