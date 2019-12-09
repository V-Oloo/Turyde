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

  currentUser = this.auth.currentUserValue;
  companyId: number = this.currentUser.companyId;

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Company> {
    return this._service.getCompany(this.companyId);
  }
}
