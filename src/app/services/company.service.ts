import { Company } from './../_models/create_company.model';
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

  getCompany(id: number): Observable<any> {
    return this.http.get<any>(this.global._BaseUri + '/companies/' + id).pipe(map((data: any) => data.result), shareReplay());
  }

  assignCompanyRoute(id: string, data) {
    return this.http.post(this.global._BaseUri + '/companies/routes/id/assign', data);
  }

  revokeCompanyRoute() {}

  updateCompany(companyData: Company) {
    return this.http.put(this.global._BaseUri + '/companies' , companyData);
  }


}
