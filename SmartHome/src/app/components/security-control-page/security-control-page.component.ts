import { Component, OnInit } from '@angular/core';
import { Security } from 'src/app/models/security-models';
import { DataStoreService } from 'src/app/services/data-store.service';
import { AppUtils } from 'src/app/utils/app-utils';
import {MatRadioModule} from '@angular/material/radio';
import { SecurityElement } from 'src/app/models/security-element';

@Component({
  selector: 'app-security-control-page',
  templateUrl: './security-control-page.component.html',
  styleUrls: ['./security-control-page.component.scss']
})
export class SecurityControlPageComponent implements OnInit {

  public rooms: Security[] = [];
  public newRoom: string = "";
  
  constructor(private _dataStoreService: DataStoreService) { }

  ngOnInit(): void {
    this.rooms = this._dataStoreService.security
  }

  public onAddNewRoom(): void {
    if (!AppUtils.isNullOrUndefined(this.newRoom) && this.newRoom !== "") {
      let roomToAdd = <Security>{
        roomName: this.newRoom,
        entryPoints: [],
        newEntryPoint: ""
      }
      this.rooms.push(roomToAdd);
      this.newRoom = "";
    }
  }

  public lockEntryPoints(): void{
    this.rooms.forEach(room => {
      room.entryPoints.forEach(entryPoint => {
          entryPoint.locked = true;
      });
    })
  }

  public onAddNewEntryPoint(room: Security): void{
    if (!AppUtils.isNullOrUndefined(room.newEntryPoint) && room.newEntryPoint !== "") {
      let entryPointToAdd = <SecurityElement>{};
      entryPointToAdd.entryPoint = room.newEntryPoint;
      entryPointToAdd.locked = false;

      room.entryPoints.push(entryPointToAdd);
      room.newEntryPoint = "";
    }
  }

}
