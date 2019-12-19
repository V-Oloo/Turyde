import { Company } from './../../_models/company.model';
import { CompanyService } from './../../services/company.service';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyResolverService implements Resolve<Company> {

  constructor(private _service: CompanyService, private auth: AuthService) { }

  currentUserSubject = this.auth.currentUserSub;
  currentUser;
  companyId: number;
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Company> {
    const item = JSON.parse(localStorage.getItem('userContext'));
    localStorage.setItem('userContext', JSON.stringify(item));
    this.currentUserSubject.next(item);
    this.currentUser = this.auth.currentUserValue;
    this.companyId = this.currentUser.companyId;
    return this._service.getCompany(this.companyId);
  }
}
