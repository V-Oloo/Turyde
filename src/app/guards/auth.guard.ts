import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this.auth.userValue;
    if (currentUser) {
       // check if route is restricted by role
       if (route.data.boundary && route.data.boundary.indexOf(currentUser.boundary) === -1) {
        // role not authorised so redirect to home page
        this.router.navigate(['/company']);
        return false;
    }
    // authorised so return true
    return true;
    }
    // activate the route only if the user is not authenticated
    // return !this.auth.isLoggedIn();
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

}
