import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlowerWateringPageComponent } from './components/flower-watering-page/flower-watering-page.component';
import { GroceriesDatabasePageComponent } from './components/groceries-database-page/groceries-database-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LightingControlPageComponent } from './components/lighting-control-page/lighting-control-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MedicineTimerPageComponent } from './components/medicine-timer-page/medicine-timer-page.component';
import { MusicPageComponent } from './components/music-page/music-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { ScreenTimeTvPageComponent } from './components/screen-time-tv-page/screen-time-tv-page.component';
import { SecurityControlPageComponent } from './components/security-control-page/security-control-page.component';
import { ThermostatPageComponent } from './components/thermostat-page/thermostat-page.component';
import { VacuumCleanerPageComponent } from './components/vacuum-cleaner-page/vacuum-cleaner-page.component';
import { AuthGuardService } from './services/auth-guard.service';
import { RoutingConstants } from './utils/enums';

//These are all the pages an user can access. With the can activate we check if the user has the 
//required roles to access the page. In case of a bad URL the user will get redirected to login page
const routes: Routes = [
  {
    path: RoutingConstants.Register,
    component: RegisterPageComponent
  },
  {
    path: RoutingConstants.Login,
    component: LoginPageComponent
  },
  {
    path: RoutingConstants.HomePage,
    component: HomePageComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: RoutingConstants.Thermostat,
    component: ThermostatPageComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: RoutingConstants.LightingControl,
    component: LightingControlPageComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: RoutingConstants.GroceriesDatabase,
    component: GroceriesDatabasePageComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: RoutingConstants.ScreenTime,
    component: ScreenTimeTvPageComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: RoutingConstants.MedicineTimer,
    component: MedicineTimerPageComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: RoutingConstants.SecurityControl,
    component: SecurityControlPageComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: RoutingConstants.VacuumCleaner,
    component: VacuumCleanerPageComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: RoutingConstants.Music,
    component: MusicPageComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: RoutingConstants.HomePage,
    component: HomePageComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: RoutingConstants.FlowerWatering,
    component: FlowerWateringPageComponent,
    canActivate: [ AuthGuardService ]
  },
  { path: '', redirectTo: RoutingConstants.Login, pathMatch: 'full' },
  { path: '**', redirectTo: RoutingConstants.Login }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
