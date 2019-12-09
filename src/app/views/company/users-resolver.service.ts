import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserProfile } from '../../_models/userProfile.model';
import { CompanyService } from '../../services/company.service';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class UsersResolverService implements Resolve<UserProfile[]> {

  constructor(private auth: AuthService, private _companyService: CompanyService) {}

  currentUser = this.auth.currentUserValue;
  companyId: number = this.currentUser.companyId;
  boundary: string = this.currentUser.boundary;

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserProfile[]> {

     return this._companyService.getUsers(this.boundary, this.companyId);
  }
}
