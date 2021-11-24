import { Injectable } from '@angular/core';
import { LocalStorageKeys } from '../utils/enums';

@Injectable({
  providedIn: 'root'
})
  // Use this service to access the local storage based on LocalStorageKeys
export class LocalStorageService {

  constructor() { }

  // Use this method to get data from local storage
  public get(key: LocalStorageKeys): any {
    if (key !== null && key !== undefined) {
      return localStorage.getItem(key);
    }
  }

  // Use this method to save data to local storage
  public set(key: LocalStorageKeys, value: any): void {
    if (key !== null && key !== undefined) {
       localStorage.setItem(key, value);
    }
  }

}
