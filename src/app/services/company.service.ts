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

  assignCompanyRoute(id: string, data) {
    return this.http.post(this.global._BaseUri + '/companies/routes/id/assign', data);
  }

  getUsers(boundary: string, companyId: number) {
    return this.http.get(this.global._BaseUri + `/users/list/${boundary}/` + companyId)
                    .pipe(map((data: any) => data.result.data), shareReplay());
  }

  getUser(id: string) {
    return this.http.get(this.global._BaseUri + `/users/${id}`).pipe(map((data: any) => data.result), shareReplay());
  }

  revokeCompanyRoute() {}

  updateCompany(id: number, companyData: Company) {
    return this.http.put(this.global._BaseUri + `/companies/${id}` , companyData);
  }


}
