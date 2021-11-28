import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Medicine } from 'src/app/models/medicine-models';
import { DataStoreService } from 'src/app/services/data-store.service';
import { takeWhile } from 'rxjs/operators';
import { AppUtils } from 'src/app/utils/app-utils';

@Component({
  selector: 'app-medicine-timer-page',
  templateUrl: './medicine-timer-page.component.html',
  styleUrls: ['./medicine-timer-page.component.scss']
})
export class MedicineTimerPageComponent implements OnInit {

  public medicine: Medicine[] = [];
  public newMedicineName: string = "";

  constructor(
    private _dataStoreService: DataStoreService
  ) { }

  ngOnInit(): void {
    this.medicine = this._dataStoreService.medicine;
  }

  public onAddMedicine(): void {
    if (!AppUtils.isNullOrUndefined(this.newMedicineName) && this.newMedicineName !== "") {
      let medicineToAdd = <Medicine>{
        name: this.newMedicineName,
        isStarted: false,
        initialTime: "01:00",
        remainingTime: "01:00"
      }
      this.medicine.push(medicineToAdd);
      this.newMedicineName = "";
    }
  }

  public onStart(index: number): void {
    this.medicine[index].isStarted = true;
    this.medicine[index].initialTime = this.medicine[index].remainingTime;
    interval(1000)
    .pipe(takeWhile(() => this.medicine[index].isStarted))
      .subscribe(() => {
      this.changeTime(index);
    });
  }

  public onStop(index: number): void {
    this.medicine[index].isStarted = false;
  }

  public getProgress(index: number): number {
    let initialTimeMin = this.getNumberOfMinutes(this.medicine[index].initialTime);
    let initialTimeHrs = this.getNumberOfHours(this.medicine[index].initialTime);
    let remainingTimeMin = this.getNumberOfMinutes(this.medicine[index].remainingTime);
    let remainingTimeHrs = this.getNumberOfHours(this.medicine[index].remainingTime);

    let amoutOfMinInitial = (initialTimeMin + initialTimeHrs * 60) / 100;
    let amoutOfMinRemaining = (remainingTimeMin + remainingTimeHrs * 60) / 100;
    
    let ratio = 100 - (amoutOfMinRemaining / amoutOfMinInitial * 100);
    return ratio;
  }

  public timeFinished(index: number): boolean {
    let remainingTime = this.medicine[index].remainingTime;
    let minutes = this.getNumberOfMinutes(remainingTime);
    let hours = this.getNumberOfHours(remainingTime);
    if (minutes == 0 && hours == 0) {
      return true;
    }
    return false;
  }

  private changeTime(index: number) {
    let remainingTime = this.medicine[index].remainingTime;

    let minutes = this.getNumberOfMinutes(remainingTime);
    let hours = this.getNumberOfHours(remainingTime);

    if (minutes == 0) {
      hours -= 1;
      minutes = 59;
    } else {
      minutes -= 1;
    }
    if (hours < 0) {
      hours = 0;
    }
    if (minutes < 0) {
      minutes = 0;
    }
    if (minutes == 0 && hours == 0) {
      this.onStop(index);
    }
    this.medicine[index].remainingTime = hours + ":" + minutes;
  }

  private getNumberOfHours(input: string): number {
    let splitInput = input.split(":", 2);
    return +splitInput[0];
  }

  private getNumberOfMinutes(input: string): number {
    let splitInput = input.split(":", 2);
    return +splitInput[1];
  }

}
