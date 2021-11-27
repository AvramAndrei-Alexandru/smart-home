import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MockHttpResponseModel } from '../models/response-models';
import { RegisterUserModel, UserModel } from '../models/user-models';
import { AppUtils } from '../utils/app-utils';
import { Role, RoutingConstants } from '../utils/enums';
import { DataStoreService } from './data-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _dataStoreService: DataStoreService,
    private router: Router
  ) { }

  //With this method an user is autheticated if the requested credentials are found in the data store.
  //When the username and password are correct the logged username is set in the data store.
  public login(user: UserModel): MockHttpResponseModel {
    let response = <MockHttpResponseModel>{};
    let foundUser = this._dataStoreService.users.find(u => u.username.toLowerCase() === user.username.toLowerCase());
    if (!AppUtils.isNullOrUndefined(foundUser) && foundUser.password === user.password) {
      response.success = true;
      this._dataStoreService.loggedUser = foundUser.username.toLowerCase();
      return response;
    }
    response.success = false;
    response.error = "Invalid username or password";
    return response;
  }

  //With this method a new user can be added to the database
  public async register(user: RegisterUserModel): Promise<MockHttpResponseModel> {
    let response = <MockHttpResponseModel>{}
    let existingUser = this._dataStoreService.users.find(u => u.username.toLowerCase() === user.username.toLowerCase());
    //We can not allow duplicated usernames
    if (AppUtils.isNullOrUndefined(existingUser)) {
      let userToAdd = <UserModel>{
        username: user.username,
        password: user.password,
        role: user.role
      };
      this._dataStoreService.users.push(userToAdd);
      response.success = true;
      return response;
    } else {
      response.success = false;
      response.error = "Duplicated username found."
      return response;
    }
  }

  //Use this method to log out. It will redirect the user to login
  public logout(): void {
    this._dataStoreService.loggedUser = null;
    this.router.navigate([RoutingConstants.Login]);
  }

  //With this method we check if the logged user has ADULT role
  public isUserAdult(): boolean {
    if (!AppUtils.isNullOrUndefined(this._dataStoreService.loggedUser)) {
      let foundUser = this._dataStoreService.users.find(u => u.username.toLowerCase() === this._dataStoreService.loggedUser.toLowerCase());
      if (!AppUtils.isNullOrUndefined(foundUser)) {
        if (foundUser.role === Role.ADULT) {
          return true;
        }
      }
    }
    return false;
  }

  //With this method we check if the logged user has CHILD role
  public isUserChild(): boolean {
    if (!AppUtils.isNullOrUndefined(this._dataStoreService.loggedUser)) {
      let foundUser = this._dataStoreService.users.find(u => u.username.toLowerCase() === this._dataStoreService.loggedUser.toLowerCase());
      if (!AppUtils.isNullOrUndefined(foundUser)) {
        if (foundUser.role === Role.CHILD) {
          return true;
        }
      }
    }
    return false;
  }

  //With this method we check if an user is logged in.
  //Take care that this method does not check for any authorization
  public isUserLoggedIn(): boolean {
    if (!AppUtils.isNullOrUndefined(this._dataStoreService.loggedUser)) {
      return true;
    }
    return false;
  }

}
