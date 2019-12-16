import { AuthService } from './../../services/auth.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyRoutesResolverService implements Resolve<any> {

  currentUser = this.auth.currentUserValue;
  companyId = this.currentUser.companyId;

  constructor(private service: CompanyService, private auth: AuthService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.service.getRoutes(this.companyId);
  }
}
