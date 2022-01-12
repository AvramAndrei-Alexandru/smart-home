import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/music-models';
import { DataStoreService } from 'src/app/services/data-store.service';
import { AppUtils } from 'src/app/utils/app-utils';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { interval, ObjectUnsubscribedError } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-music-page',
  templateUrl: './music-page.component.html',
  styleUrls: ['./music-page.component.scss']
})
export class MusicPageComponent implements OnInit {

  public library: Song[] = [];
  public dataSource = new MatTableDataSource<Song>();
  public displayedColumns: string[] = ['name', 'length'];
  public clickedRows: Song[] = [];

  private isFirstTime: boolean = true;

  constructor(
    private _dataStoreService: DataStoreService
  ) { }

  ngOnInit(): void {
    this.library = this._dataStoreService.librarySongs;
    this.dataSource.data = this.library;
  }

  public getProgress(index: number): number {
    let initialTime = this.clickedRows[index].initialTime;
    let remainingTime = this.clickedRows[index].remainingTime;

    let amoutOfMinInitial = initialTime / 100;
    let amoutOfMinRemaining = remainingTime / 100;
    
    let ratio = 100 - (amoutOfMinRemaining / amoutOfMinInitial * 100);
    return ratio;
  }

  public addClickedRow(row: any): void {
    let ctRow = this.library.find(f => f.name === row.name);

    let ctSong = new Song;
    ctSong.name = ctRow.name;
    ctSong.length = ctRow.length;
    ctSong.initialTime = ctRow.initialTime;
    ctSong.remainingTime = ctRow.remainingTime;
    ctSong.isStarted = ctRow.isStarted;

    this.clickedRows.push(ctSong);
  }

  public isRowClicked(row: Song): boolean {
    let foundSong = this.clickedRows.find(f => f.name === row.name);
    if (foundSong !== null) {
      return false;
    }
    return true;
  }
  
  private changeProgress(): void {
    if(this.clickedRows[0].isStarted) {
      this.clickedRows[0].remainingTime--;
      console.log(this.clickedRows[0].name + ": " + this.clickedRows[0].remainingTime);
    }
  }

  public onStart(): void {
    this.clickedRows[0].isStarted = true;
    console.log(this.clickedRows[0].name + " state: " + this.clickedRows[0].isStarted);

    if(this.isFirstTime)
    {
      this.isFirstTime = false;  
      interval(1000)
      .pipe(takeWhile(() => true))
        .subscribe(() => {
          this.changeProgress();
          if(this.clickedRows[0].remainingTime == 1){
            this.clickedRows[0].isStarted = false;
            this.clickedRows[0].remainingTime = 0;
          }
      });
    }
  }

  public onStop(): void {
    this.clickedRows[0].isStarted = false;
    console.log(this.clickedRows[0].name + " state: " + this.clickedRows[0].isStarted);
  }

  public onNext(): void {
    this.clickedRows.splice(0, 1);
    this.clickedRows[0].isStarted = true;
    console.log(this.clickedRows[0].name + " state: " + this.clickedRows[0].isStarted);
  }

  public timeFinished(): void {
    let remainingTime = this.clickedRows[0].remainingTime;
    if(remainingTime == 0 && this.clickedRows[0].isStarted == false) {
      this.clickedRows.splice(0, 1);
      this.clickedRows[0].isStarted = true;
      console.log(this.clickedRows[0].name + " state: " + this.clickedRows[0].isStarted);
    }
  }
}
