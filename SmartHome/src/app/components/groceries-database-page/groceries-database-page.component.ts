import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/models/groceries-models';
import { DataStoreService } from 'src/app/services/data-store.service';
import { AppUtils } from 'src/app/utils/app-utils';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-groceries-database-page',
  templateUrl: './groceries-database-page.component.html',
  styleUrls: ['./groceries-database-page.component.scss']
})
export class GroceriesDatabasePageComponent implements OnInit {

  public groceries: Food[] = [];
  public dataSource = new MatTableDataSource<Food>();
  public displayedColumns: string[] = ['name', 'quantity'];
  public clickedRows: Food[] = [];
  public newFoodName: string = "";
  public newFoodQuantity: number = 0;
  public fruitCtrl = new FormControl();
  public separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(
    private _dataStoreService: DataStoreService
  ) { }

  ngOnInit(): void {
    this.groceries = this._dataStoreService.groceries;
    this.dataSource.data = this.groceries;
    this.clickedRows = this._dataStoreService.groceriesList;
  }

  public addClickedRow(row: any): void {
    this.clickedRows.push(row);
  }

  public isRowClicked(row: Food): boolean {
    let foundFood = this.clickedRows.find(f => f.name === row.name);
    if (foundFood !== null) {
      return false;
    }
    return true;
  }

  public onAddFood(): void {
    if (!AppUtils.isNullOrUndefined(this.newFoodName) && !AppUtils.isNullOrUndefined(this.newFoodQuantity) && this.newFoodName !== "") {
      let foundFood = this.groceries.find(f => f.name === this.newFoodName);
      if (!AppUtils.isNullOrUndefined(foundFood)) {
        return;
      }
      let newFood = <Food>{
        name: this.newFoodName,
        quantity: this.newFoodQuantity
      }
      this.groceries.push(newFood);
      this.dataSource.data = this.groceries;
      this.newFoodName = "";
      this.newFoodQuantity = 0
    }
  }

  public remove(food: Food): void {
    let index = 0;
    for (let i = 0; i < this.clickedRows.length; i++) {
      if (this.clickedRows[i].name === food.name) {
        index = i;
        break;
      }
    }
    this.clickedRows.splice(index, 1);
  }

  public add(event: any): void {
    let food = <Food>{
      name: event.value,
      quantity: 1
    }
    this.clickedRows.push(food)
  }

}
