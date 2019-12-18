import { Globals } from './../global';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private global: Globals) { }

  getCompanyList() {
    return this.http.get(this.global._BaseUri + '/companies').pipe(map((data: any) => data.result.data), shareReplay());
  }
}
