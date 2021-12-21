import { Injectable } from '@angular/core';
import { Medicine } from '../models/medicine-models';
import { Thermostat } from '../models/thermostat-models';
import { UserModel } from '../models/user-models';
import { Role } from '../utils/enums';
import { Time } from "@angular/common";
import { Food } from '../models/groceries-models';
import { Lighting } from '../models/lighting-models';
import { SecurityElement } from '../models/security-element';
import { Security } from '../models/security-models';
import { ScreenControl } from '../models/screen-control-models';

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
  //Added
  public lighting: Lighting[] = [];
  public security: Security[] = [];
  public screen_control: ScreenControl[] = [];
  public programs: String[] = [];

  constructor() { }


  //This method is called on app creation. Use this method to seed all the data that you may need.
  public seedInitialData(): void {
    this.seedUsers();
    this.seedThermostats();
    this.seedMedicine();
    this.seedGroceries();

    //Added
    this.seedLighting();
    this.seedSecurity();
    this.seedScreenControl();
    this.seedPrograms();
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

  //ADDED
  private seedLighting(): void{
    let lightRoom = <Lighting>{
      roomName: "Living room",
      currentLighting: 23
    };
    this.lighting.push(lightRoom);

    lightRoom = <Lighting>{
      roomName: "Kitchen",
      currentLighting: 50
    };
    this.lighting.push(lightRoom);


    lightRoom = <Lighting>{
      roomName: "Parent's bedroom",
      currentLighting: 20
    };
    this.lighting.push(lightRoom);


    lightRoom = <Lighting>{
      roomName: "Grandparent's bedroom",
      currentLighting: 80
    };
    this.lighting.push(lightRoom);

    lightRoom = <Lighting>{
      roomName: "Child bedroom 1",
      currentLighting: 0
    };
    this.lighting.push(lightRoom);

    lightRoom = <Lighting>{
      roomName: "Child bedroom 2",
      currentLighting: 10
    };
    this.lighting.push(lightRoom);

    lightRoom = <Lighting>{
      roomName: "Bathroom",
      currentLighting: 0
    };
    this.lighting.push(lightRoom);
  }



   private seedSecurity(): void{
    let securityRoom = <Security>{
      roomName: "Living room",
      entryPoints: [<SecurityElement>{entryPoint: "window 1", locked: true}, <SecurityElement>{entryPoint: "window 2", locked: false}],
      newEntryPoint: ""
    };
    this.security.push(securityRoom);

    securityRoom = <Security>{
      roomName: "Kitchen",
      entryPoints: [<SecurityElement>{entryPoint: "window", locked: false}, <SecurityElement>{entryPoint: "door", locked: false}],
      newEntryPoint: ""
    };
    this.security.push(securityRoom);


    securityRoom = <Security>{
      roomName: "Parent's bedroom",
      entryPoints: [<SecurityElement>{entryPoint: "window 1", locked: true}, <SecurityElement>{entryPoint: "window 2", locked: true},<SecurityElement>{entryPoint: "door", locked: false}],
      newEntryPoint: ""
    };
    this.security.push(securityRoom);


    securityRoom = <Security>{
      roomName: "Grandparent's bedroom",
      entryPoints: [<SecurityElement>{entryPoint: "window", locked: true}, <SecurityElement>{entryPoint: "door", locked: false}],
      newEntryPoint: ""
    };
    this.security.push(securityRoom);

    securityRoom = <Security>{
      roomName: "Child bedroom 1",
      entryPoints: [<SecurityElement>{entryPoint: "window", locked: true}, <SecurityElement>{entryPoint: "door", locked: false}],
      newEntryPoint: ""
    };
    this.security.push(securityRoom);

    securityRoom = <Security>{
      roomName: "Child bedroom 2",
      entryPoints: [<SecurityElement>{entryPoint: "window", locked: false}, <SecurityElement>{entryPoint: "door", locked: false}, <SecurityElement>{entryPoint: "door 2", locked: true}],
      newEntryPoint: ""
    };
    this.security.push(securityRoom);

    securityRoom = <Security>{
      roomName: "Bathroom",
      entryPoints: [<SecurityElement>{entryPoint: "door", locked: true}],
      newEntryPoint: ""
    };

    securityRoom = <Security>{
      roomName: "Hall",
      entryPoints: [<SecurityElement>{entryPoint: "door", locked: true}],
      newEntryPoint: ""
    };
    this.security.push(securityRoom);   
  }


  private seedScreenControl(): void{
    let screen = <ScreenControl>{
      device: "TV living room",
      startTime: "14:35",
      closeTime:"11:20",
      programs: ["Minimax", "Natinal Geo", "Eurosport"]
    };
    this.screen_control.push(screen);

    screen = <ScreenControl>{
      device: "TV Grandparents",
      startTime: "0:00",
      closeTime:"0:00",
      programs: [ "Pro Tv", "Natinal Geo", "Antena 1", "Eurosport"]
    };
    this.screen_control.push(screen);

    screen = <ScreenControl>{
      device: "TV Kids room",
      startTime: "17:00",
      closeTime:"20:00",
      programs: ["Minimax", "Cartoon Network"]
    };
    this.screen_control.push(screen);

    screen = <ScreenControl>{
      device: "TV parents room",
      startTime: "0:00",
      closeTime:"0:00",
      programs: [ "Pro Tv", "Natinal Geo", "Antena 1", "Eurosport", "Rock TV"]
    };
    this.screen_control.push(screen);
  }

  public seedPrograms(): void{
    this.programs.push("Minimax", "Pro Tv", "Natinal Geo", "Antena 1", "Eurosport", "Rock TV", "Cartoon Network");
  }
}
