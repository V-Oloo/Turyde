import { Company } from '../_models/company.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Globals } from '../global';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient, private global: Globals) { }

  registerCompany(data: Company) {
     return this.http.post(this.global._BaseUri + '/companies/create', data);
  }

  getAllCompanies(): Observable<Company> {
    return this.http.get<Company>(this.global._BaseUri + '/companies');
  }

  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>(this.global._BaseUri + '/companies/' + id).pipe(map((data: any) => data.result), shareReplay());
  }

  assignCompanyRoute(companyId: number, data: any) {
    return this.http.post(this.global._BaseUri + `/companies/routes/${companyId}/assign`, data);
  }

  revokeCompanyRoute(companyId: number, routeId: number) {
    return this.http.post(this.global._BaseUri + `/companies/routes/${companyId}/revoke`, routeId);
  }

  getRoutes(companyId?) {
    return this.http.get(this.global._BaseUri + '/routes/list', companyId).pipe(map((data: any) => data.result.data), shareReplay());
  }

  getRoute(id: number) {
    return this.http.get(this.global._BaseUri + `/routes/${id}`).pipe(map((data: any) => data.result), shareReplay());
  }

  updateCompany(id: number, companyData: Company) {
    return this.http.put(this.global._BaseUri + `/companies/update/${id}` , companyData);
  }

  updateUser(user: any) {
    return this.http.put(this.global._BaseUri + `/users/profile-update` , user);
  }


}
