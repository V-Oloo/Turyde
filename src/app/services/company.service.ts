import { Company } from './../_models/create_company.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Globals } from '../global';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  // readonly _BaseUri = 'http://dev.turyde.com/api/v1';

  constructor(private http: HttpClient, private global: Globals) { }

  registerCompany(data: Company) {
     return this.http.post(this.global._BaseUri + '/companies/create', data);
  }

  getAllCompanies(): Observable<Company> {
    return this.http.get<Company>(this.global._BaseUri + '/companies');
  }

  getCompany(id: string): Observable<Company> {
    return this.http.get<Company>(this.global._BaseUri + '/companies/id');
  }

  assignCompanyRoute(id: string, data) {
    return this.http.post(this.global._BaseUri + '/companies/routes/id/assign', data);
  }

  revokeCompanyRoute() {}

  updateCompany(companyData: Company) {
    return this.http.put(this.global._BaseUri + '/companies' , companyData);
  }


}
