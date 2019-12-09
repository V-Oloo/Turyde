import { Observable } from 'rxjs';
import { VehicleType } from './../../_models/vehicleType.model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';

@Injectable()
export class VehicleTypeResolverService implements Resolve<VehicleType> {

  constructor(private service: VehicleService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<VehicleType> {
    return this.service.vehicleType();
  }
}
