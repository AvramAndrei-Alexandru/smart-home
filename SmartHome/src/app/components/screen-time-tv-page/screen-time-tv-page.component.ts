import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ScreenControl } from 'src/app/models/screen-control-models';
import { DataStoreService } from 'src/app/services/data-store.service';
import { AppUtils } from 'src/app/utils/app-utils';

@Component({
  selector: 'app-screen-time-tv-page',
  templateUrl: './screen-time-tv-page.component.html',
  styleUrls: ['./screen-time-tv-page.component.scss']
})
export class ScreenTimeTvPageComponent implements OnInit {

  public tvs: ScreenControl[] = [];
  public newDevice: string = "";
  public programs: String[] = [];

  constructor(private _dataStoreService: DataStoreService) { }

  ngOnInit(): void {
    this.tvs = this._dataStoreService.screen_control;
    this.programs = this._dataStoreService.programs;
  }


  public onAddNewDevice(): void{
    if (!AppUtils.isNullOrUndefined(this.newDevice) && this.newDevice !== "") {
      let deviceToAdd = <ScreenControl>{
        device : this.newDevice,
        startTime : "0:00",
        closeTime : "0:00",
        programs: []
      }
      this.tvs.push(deviceToAdd);
      this.newDevice = "";
    }
  }

 public managePrograms(device: ScreenControl, program: String, validator: boolean): void{
    if(validator){
      device.programs.push(program);
    }else{
      device.programs = device.programs.filter(elem => elem !== program);
    }
 }
}
