import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-flower-watering-page',
  templateUrl: './flower-watering-page.component.html',
  styleUrls: ['./flower-watering-page.component.scss']
})
export class FlowerWateringPageComponent implements OnInit {


  public humidityLevelIndoor: number = 23;
  public humidityLevelOutdoor: number = 11;

  private startWaterIndoor: boolean = false;
  private startWaterOutdoor: boolean = false;

  private changeHumidity(): void {
    if(this.startWaterIndoor) {
      if(this.humidityLevelIndoor < 80)
        this.humidityLevelIndoor++;
    }
    else {
      if(this.humidityLevelIndoor > 5)
        this.humidityLevelIndoor -= 0.1;
    }

    if(this.startWaterOutdoor) {
      if(this.humidityLevelOutdoor < 75)
        this.humidityLevelOutdoor++;
    }
    else {
      if(this.humidityLevelOutdoor > 5)
        this.humidityLevelOutdoor -= 0.1;
    }
  }

  constructor() {
    interval(2000)
      .pipe(takeWhile(() => true))
        .subscribe(() => {
          this.changeHumidity();
      });
   }

  ngOnInit(): void {
  }

  public onIndoorStart(): void {
    document.getElementById("indoor-running").hidden = false;
    this.startWaterIndoor = true;
  }

  public onIndoorStop(): void {
    document.getElementById("indoor-running").hidden = true;
    this.startWaterIndoor = false;
  }

  public onOutdoorStart(): void {
    document.getElementById("outdoor-running").hidden = false;
    this.startWaterOutdoor = true;
  }

  public onOutdoorStop(): void {
    document.getElementById("outdoor-running").hidden = true;
    this.startWaterOutdoor = false;
  }

}
