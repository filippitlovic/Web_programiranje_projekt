import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataserviceService {
  _sharedData: string;
  constructor() {}
  get sharedData() {
    return localStorage.getItem('email');
  }
}
