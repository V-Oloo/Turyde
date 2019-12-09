import { CompanyService } from './../../services/company.service';
import { Observable } from 'rxjs';
import { UserProfile } from './../../_models/userProfile.model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProfileResolverService implements Resolve<UserProfile> {

  constructor(private _service: CompanyService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserProfile> {
    const id = route.paramMap.get('id');
    return this._service.getUser(id);
  }
}
