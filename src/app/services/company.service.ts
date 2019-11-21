import { CreateCompany } from './../_models/create_company.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  readonly _BaseUri = 'http://dev.turyde.com/api/v1';

  constructor(private http: HttpClient) { }

  registerCompany(data): Observable<CreateCompany> {
     return this.http.post<CreateCompany>(this._BaseUri + '/companies/create', data);
  }


}
