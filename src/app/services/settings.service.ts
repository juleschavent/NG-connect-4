import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public isDarkMode = false;

  public toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    console.log(this.isDarkMode);
  }

  constructor() { }
}
