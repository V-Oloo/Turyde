import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Vehicle } from '../../_models/vehicle.model';
import { VehicleService } from '../../services/vehicle.service';

@Injectable()
export class SingleVehicleResolverService implements Resolve<Vehicle> {

  constructor(private service: VehicleService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Vehicle> {
    const id = +route.paramMap.get('id');
    return this.service.getVehicle(id);
  }
}
