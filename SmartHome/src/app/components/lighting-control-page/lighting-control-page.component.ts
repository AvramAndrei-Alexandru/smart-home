import { Component, OnInit } from '@angular/core';
import { Lighting } from 'src/app/models/lighting-models';
import { DataStoreService } from 'src/app/services/data-store.service';
import { AppUtils } from 'src/app/utils/app-utils';

@Component({
  selector: 'app-lighting-control-page',
  templateUrl: './lighting-control-page.component.html',
  styleUrls: ['./lighting-control-page.component.scss']
})
export class LightingControlPageComponent implements OnInit {

  public rooms: Lighting[] = [];
  public newRoom: string = "";

  constructor( private _dataStoreService: DataStoreService) { }

  ngOnInit(): void {
    this.rooms = this._dataStoreService.lighting
  }

  public onAddNewRoom(): void {
    if (!AppUtils.isNullOrUndefined(this.newRoom) && this.newRoom !== "") {
      let roomToAdd = <Lighting>{
        roomName: this.newRoom,
        currentLighting: 0
      }
      this.rooms.push(roomToAdd);
      this.newRoom = "";
    }
  }

  public turnOffAllLights(): void{
    this.rooms.forEach(room => {
      room.currentLighting = 0;
    })
  }

  public turnOffRoomLight(room: Lighting): void{
    this.rooms.forEach(roomHouse =>{
        if(roomHouse.roomName == room.roomName){
          roomHouse.currentLighting = 0;
        }
    })
  }

  public turnOnRoomLight(room: Lighting): void{
    this.rooms.forEach(roomHouse =>{
        if(roomHouse.roomName == room.roomName){
          roomHouse.currentLighting = 100;
        }
    })
  }

}
