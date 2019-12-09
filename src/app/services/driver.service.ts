import { Globals } from './../global';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay, map } from 'rxjs/operators';
import { DriverDocs } from '../_models/driverDocs.model';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http: HttpClient, private global: Globals) { }

  getDrivers(id: number) {
    return this.http.get(this.global._BaseUri + '/drivers/list/' + id).pipe(map((data: any) => data.result.data), shareReplay(), );
  }

  addDriver(data: any) {
    return this.http.post(this.global._BaseUri + '/users/add', data);
  }

  uploadDriverDocs(id: string, data: DriverDocs) {
    return this.http.post<DriverDocs>(this.global._BaseUri + `/drivers/documents/${id}/upload`, data);
  }
}
