import { Injectable } from '@angular/core';
import { UserModel } from '../models/user-models';
import { Role } from '../utils/enums';

@Injectable({
  providedIn: 'root'
})
  //This is the app "in memory database". The arrays in this service are populate on app creation (A refresh of the app will trigger a repopulation of the arrays)
export class DataStoreService {

  public users: UserModel[] = [];
  public loggedUser: string;

  constructor() { }


  //This method is called on app creation. Use this method to seed all the data that you may need.
  public seedInitialData(): void {
    this.seedUsers();
  }

  private seedUsers(): void {
    let andreiAdult = <UserModel>{
      username: "andrei",
      role: Role.ADULT,
      password: "password"
    }
    this.users.push(andreiAdult);
  }

}
