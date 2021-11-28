import { Injectable } from '@angular/core';
import { Medicine } from '../models/medicine-models';
import { Thermostat } from '../models/thermostat-models';
import { UserModel } from '../models/user-models';
import { Role } from '../utils/enums';
import { Time } from "@angular/common";
import { Food } from '../models/groceries-models';

@Injectable({
  providedIn: 'root'
})
  //This is the app "in memory database". The arrays in this service are populate on app creation (A refresh of the app will trigger a repopulation of the arrays)
export class DataStoreService {

  public users: UserModel[] = [];
  public thermostats: Thermostat[] = [];
  public medicine: Medicine[] = [];
  public groceries: Food[] = [];
  public groceriesList: Food[] = [];
  public loggedUser: string;

  constructor() { }


  //This method is called on app creation. Use this method to seed all the data that you may need.
  public seedInitialData(): void {
    this.seedUsers();
    this.seedThermostats();
    this.seedMedicine();
    this.seedGroceries();
  }

  private seedGroceries(): void {
    let food = <Food>{
      name: "Timisoreana",
      quantity: 5
    };
    this.groceries.push(food);
    food = <Food>{
      name: "Ursus",
      quantity: 4
    };
    this.groceries.push(food);
    food = <Food>{
      name: "Albacher",
      quantity: 10
    };
    this.groceries.push(food);
    food = <Food>{
      name: "Bread",
      quantity: 2
    };
    this.groceries.push(food);
    food = <Food>{
      name: "Ice cream",
      quantity: 12
    };
    this.groceries.push(food);
    food = <Food>{
      name: "Pizza",
      quantity: 1
    };
    this.groceries.push(food);
    food = <Food>{
      name: "Water",
      quantity: 3
    };
    this.groceries.push(food);
  }

  private seedMedicine(): void {
    let medicine = <Medicine>{
      name: "Paracetamol",
      isStarted: true,
      initialTime: "1:20",
      remainingTime:"1:20"
    };
    this.medicine.push(medicine);
    medicine = <Medicine>{
      name: "Nurofen",
      isStarted: true,
      initialTime: "0:40",
      remainingTime:"0:40"
    };
    this.medicine.push(medicine);
    medicine = <Medicine>{
      name: "Advil",
      isStarted: true,
      initialTime: "5:30",
      remainingTime:"5:30"
    };
    this.medicine.push(medicine);
  }

  private seedThermostats(): void {
    let thermostat = <Thermostat>{
      roomName: "Living room",
      currentTemperature: 23,
      hasAC: false
    };
    this.thermostats.push(thermostat);
    thermostat = <Thermostat>{
      roomName: "Kitchen",
      currentTemperature: 21,
      hasAC: false
    };
    this.thermostats.push(thermostat);
    thermostat = <Thermostat>{
      roomName: "Parent's bedroom",
      currentTemperature: 22,
      hasAC: true
    };
    this.thermostats.push(thermostat);
    thermostat = <Thermostat>{
      roomName: "Grandparent's bedroom",
      currentTemperature: 20,
      hasAC: true
    };
    this.thermostats.push(thermostat);
    thermostat = <Thermostat>{
      roomName: "Child bedroom 1",
      currentTemperature: 23,
      hasAC: false
    };
    this.thermostats.push(thermostat);
    thermostat = <Thermostat>{
      roomName: "Child bedroom 2",
      currentTemperature: 22,
      hasAC: false
    };
    this.thermostats.push(thermostat);
    thermostat = <Thermostat>{
      roomName: "Bathroom",
      currentTemperature: 20,
      hasAC: false
    };
    this.thermostats.push(thermostat);
  }

  private seedUsers(): void {
    let andreiAdult = <UserModel>{
      username: "andrei",
      role: Role.ADULT,
      password: "password"
    }
    let child = <UserModel>{
      username: "child",
      role: Role.CHILD,
      password: "password"
    }
    this.users.push(andreiAdult);
    this.users.push(child);
  }

}
