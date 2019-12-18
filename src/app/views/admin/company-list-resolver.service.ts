import { AdminService } from './../../services/admin.service';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Company } from '../../_models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyListResolverService implements Resolve<Company[]> {

  constructor(private admin: AdminService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Company[]> {
    return this.admin.getCompanyList();
  }
}
