import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from '../_models/vehicle.model';
import { Globals } from './../global';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {




  constructor(private http: HttpClient, private global: Globals) { }


  vehicleType() {
    return this.http.get(this.global._BaseUri + '/vehicles/types').pipe(map((data: any) => data.result ), shareReplay(), );
  }

  getVehicles(id: Number) {
    return this.http.get(this.global._BaseUri + '/vehicles/list/' + id).pipe(map((data: any) => data.result.data));
  }

  getVehicle(vehicleId: number) {
    return this.http.get<Vehicle>(this.global._BaseUri + '/vehicles/' + vehicleId).pipe(map((data: any) => data.result),  shareReplay(), );
  }

  createVehicle(data: Vehicle) {
    return this.http.post<Vehicle>(this.global._BaseUri + '/vehicles/create' , data);
 }

 updateVehicle() {

 }
}
