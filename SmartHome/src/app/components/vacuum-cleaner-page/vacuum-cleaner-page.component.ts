import { Component, OnInit } from '@angular/core';
import { Vacuum } from 'src/app/models/vacuum-models';
import { DataStoreService } from 'src/app/services/data-store.service';
import { AppUtils } from 'src/app/utils/app-utils';

@Component({
  selector: 'app-vacuum-cleaner-page',
  templateUrl: './vacuum-cleaner-page.component.html',
  styleUrls: ['./vacuum-cleaner-page.component.scss']
})
export class VacuumCleanerPageComponent implements OnInit {

  public vacuums: Vacuum[] = [];
  public vacuumScheduledHour: string = "";
  public newRoomName: string = "";

  constructor(
    private _dataStoreService: DataStoreService
  ) { }

  ngOnInit(): void {
    this.vacuums = this._dataStoreService.vacuums;
  }

  public onAddNewRoom(): void {
    if (!AppUtils.isNullOrUndefined(this.newRoomName) && this.newRoomName !== "") {
      let roomToAdd = <Vacuum>{
        roomName: this.newRoomName,
        scheduledHour: 22,
        hasStarted: false
      }
      this.vacuums.push(roomToAdd);
      this.newRoomName = "";
    }
  }

  public onStartVacuum(): void {
    window.alert("Vacuum clean scheduled for hour: " + this.vacuumScheduledHour);
    document.getElementById("vacuum-running").hidden = false;
    console.log("CLEAN");
  }

  public onWash(): void {
    window.alert("Vacuum wash scheduled for hour: " + this.vacuumScheduledHour);
    document.getElementById("vacuum-running").hidden = false;
    console.log("WASH");
  }

}
