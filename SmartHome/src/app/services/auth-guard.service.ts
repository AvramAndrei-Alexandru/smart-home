import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutinConstatantsForAuthGuard, RoutingConstants } from '../utils/enums';
import { AuthService } from './auth.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    private _authService: AuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (state.url === RoutinConstatantsForAuthGuard.HomePage) {
      if (this._authService.isUserLoggedIn()) {
        return true;
      } else {
        return this.router.navigate([RoutingConstants.Login]);
      }
    } else {
      return true;
    }
  }
}
