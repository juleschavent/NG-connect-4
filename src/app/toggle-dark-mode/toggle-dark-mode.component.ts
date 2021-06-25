import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-dark-mode',
  templateUrl: './toggle-dark-mode.component.html',
  styleUrls: ['./toggle-dark-mode.component.scss']
})
export class ToggleDarkModeComponent implements OnInit {

  isDarkMode = false;

  slideToggle() {
    this.isDarkMode = !this.isDarkMode;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
