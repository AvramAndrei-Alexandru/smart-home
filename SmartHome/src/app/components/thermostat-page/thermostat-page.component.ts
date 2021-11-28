import { Component, OnInit } from '@angular/core';
import { Thermostat } from 'src/app/models/thermostat-models';
import { DataStoreService } from 'src/app/services/data-store.service';

@Component({
  selector: 'app-thermostat-page',
  templateUrl: './thermostat-page.component.html',
  styleUrls: ['./thermostat-page.component.scss']
})
export class ThermostatPageComponent implements OnInit {

  public thermostats: Thermostat[] = [];
  
  constructor(
    private _dataStoreService: DataStoreService
  ) { }

  ngOnInit(): void {
    this.thermostats = this._dataStoreService.thermostats;
    console.log(this.thermostats)
  }

}
