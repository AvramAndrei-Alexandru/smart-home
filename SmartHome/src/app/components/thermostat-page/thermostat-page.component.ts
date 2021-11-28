import { Component, OnInit } from '@angular/core';
import { Thermostat } from 'src/app/models/thermostat-models';
import { DataStoreService } from 'src/app/services/data-store.service';
import { AppUtils } from 'src/app/utils/app-utils';

@Component({
  selector: 'app-thermostat-page',
  templateUrl: './thermostat-page.component.html',
  styleUrls: ['./thermostat-page.component.scss']
})
export class ThermostatPageComponent implements OnInit {

  public thermostats: Thermostat[] = [];
  public newRoomName: string = "";

  constructor(
    private _dataStoreService: DataStoreService
  ) { }

  ngOnInit(): void {
    this.thermostats = this._dataStoreService.thermostats;
  }

  public onAddNewRoom(): void {
    if (!AppUtils.isNullOrUndefined(this.newRoomName) && this.newRoomName !== "") {
      let roomToAdd = <Thermostat>{
        roomName: this.newRoomName,
        currentTemperature: 22,
        hasAC: false
      }
      this.thermostats.push(roomToAdd);
      this.newRoomName = "";
    }
  }

}
