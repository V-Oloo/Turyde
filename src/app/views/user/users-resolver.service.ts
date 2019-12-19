import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserProfile } from '../../_models/userProfile.model';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class UsersResolverService implements Resolve<UserProfile[]> {

  constructor(private auth: AuthService) {}

  companyId: number;
  boundary: string ;
  currentUser;

  userSubject = this.auth.UserSub;

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserProfile[]> {
    const item = JSON.parse(localStorage.getItem('currentUser'));
    item['companyId'] = '0';
    localStorage.setItem('currentUser', JSON.stringify(item));
    this.userSubject.next(item);
    this.currentUser = this.auth.userValue;
    this.companyId = this.currentUser.companyId;
    this.boundary = this.currentUser.boundary;

     return this.auth.getUsers(this.boundary, this.companyId);
  }
}
