import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MainAuthGuard implements CanActivate, CanLoad {

  constructor(private auth: AuthService, private router: Router) {}


  canActivate(): boolean {

      return this.canLoad();

  }

  canLoad(): boolean {

      if (!this.auth.isLoggedIn()) {
        this.router.navigate(['/login']);
      }
      return this.auth.isLoggedIn();
    }
  }

