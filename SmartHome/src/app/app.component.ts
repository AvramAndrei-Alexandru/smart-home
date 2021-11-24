import { Component, OnInit } from '@angular/core';
import { DataStoreService } from './services/data-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'SmartHome';

  constructor(private _dataStoreService: DataStoreService) {

  }

  public ngOnInit(): void {
    this._dataStoreService.seedInitialData();
  }

}
