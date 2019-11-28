import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Vehicle } from '../_models/vehicle.model';
import { Globals } from './../global';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  options: Array<object> = [
    {
      id : 1,
      type: 'range'
    },
    {
      id : 2,
      type: 'bus'
    },
    {
      id : 4,
      type: 'mini-bus'
    },
    {
      id : 5,
      type: 'matatu'
    },
    {
      id : 6,
      type: 'potche'
    },
    {
      id : 7,
      type: 'ma3'
    },
    {
      id : 8,
      type: 'nduthi'
    },
    {
      id : 9,
      type: 'basy'
    },

  ];




  constructor(private http: HttpClient, private global: Globals) { }


  vehicleType() {
    return of(this.options);
  }

  createVehicle(data: Vehicle) {
    return this.http.post<Vehicle>(this.global._BaseUri + '/vehicles/create' , data);
 }
}
