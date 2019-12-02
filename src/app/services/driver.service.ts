import { Globals } from './../global';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http: HttpClient, private global: Globals) { }

  getDrivers() {
    return this.http.get(this.global._BaseUri + '/drivers/list').pipe( shareReplay(), );
  }

  addDriver(data: any) {
    return this.http.post(this.global._BaseUri + '/users/add', data);
  }
}
