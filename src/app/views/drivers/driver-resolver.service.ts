import { Observable } from 'rxjs';
import { AuthService } from './../../services/auth.service';
import { DriverService } from './../../services/driver.service';
import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DriverResolverService implements Resolve<any> {

  constructor(
    private service: DriverService,
    private auth: AuthService
    ) { }

    currentUser = this.auth.currentUserValue;
    companyId: number = this.currentUser.companyId;

  resolve(): Observable<any> {
    return this.service.getDrivers(this.companyId);
  }
}
