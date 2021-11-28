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
    //TODO REMOVE THIS
    return true;
    if (this.isInAnyPageThatRequiresLoggedUser(state)) {
      if (!this._authService.isUserLoggedIn()) {
        return this.router.navigate([RoutingConstants.Login]);
      } else {
        //The user must be ADULT
        if (this.isAnyPageThatRequiresAdultRole(state)) {
          if (this._authService.isUserAdult()) {
            return true;
          } else {
            return this.router.navigate([RoutingConstants.Login]);
          }
        } else {
          return true;
        }
      }
    } else {
      return true;
    }
  }

  //For all the pages below the user must be logged in
  private isInAnyPageThatRequiresLoggedUser(state: RouterStateSnapshot): boolean {
    if (
      state.url === RoutinConstatantsForAuthGuard.HomePage ||
      state.url === RoutinConstatantsForAuthGuard.Thermostat ||
      state.url === RoutinConstatantsForAuthGuard.LightingControl ||
      state.url === RoutinConstatantsForAuthGuard.GroceriesDatabase ||
      state.url === RoutinConstatantsForAuthGuard.ScreenTime ||
      state.url === RoutinConstatantsForAuthGuard.MedicineTimer ||
      state.url === RoutinConstatantsForAuthGuard.SecurityControl ||
      state.url === RoutinConstatantsForAuthGuard.VacuumCleaner ||
      state.url === RoutinConstatantsForAuthGuard.Music ||
      state.url === RoutinConstatantsForAuthGuard.FlowerWatering
    ) {
      return true;
    }
    return false;
  }

  //The pages below can be accessed only with adult role
  private isAnyPageThatRequiresAdultRole(state: RouterStateSnapshot): boolean {
    if (
      state.url === RoutinConstatantsForAuthGuard.Thermostat ||
      state.url === RoutinConstatantsForAuthGuard.ScreenTime ||
      state.url === RoutinConstatantsForAuthGuard.MedicineTimer ||
      state.url === RoutinConstatantsForAuthGuard.SecurityControl ||
      state.url === RoutinConstatantsForAuthGuard.VacuumCleaner ||
      state.url === RoutinConstatantsForAuthGuard.FlowerWatering
    ) {
      return true;
    }
    return false;
  }
}
