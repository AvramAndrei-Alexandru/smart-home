import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { AuthGuardService } from './services/auth-guard.service';
import { RoutingConstants } from './utils/enums';

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
  { path: '', redirectTo: RoutingConstants.Login, pathMatch: 'full' },
  { path: '**', redirectTo: RoutingConstants.Login }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
