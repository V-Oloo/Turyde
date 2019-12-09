import { AuthService } from './../../services/auth.service';
import { VehicleService } from './../../services/vehicle.service';
import { Vehicle } from './../../_models/vehicle.model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleResolverService implements Resolve<Vehicle[]> {

  constructor(private service: VehicleService, private auth: AuthService) { }

  currentUser = this.auth.currentUserValue;
  companyId = this.currentUser.companyId;

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Vehicle[]> {
     return this.service.getVehicles(this.companyId);
  }
}
