import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserProfile } from '../../_models/userProfile.model';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class CompanyUsersResolverService implements Resolve<UserProfile[]> {

  constructor(private auth: AuthService) {}

  currentUserSubject = this.auth.currentUserSub;
  currentUser;
  companyId: number;

  boundary: string;

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserProfile[]> {
    const item = JSON.parse(localStorage.getItem('userContext'));
    localStorage.setItem('userContext', JSON.stringify(item));
    this.currentUserSubject.next(item);
    this.currentUser = this.auth.currentUserValue;
    this.companyId = this.currentUser.companyId;
    this.boundary = this.currentUser.boundary;
     return this.auth.getUsers(this.boundary, this.companyId);
  }
}
