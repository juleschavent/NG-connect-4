import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-toggle-dark-mode',
  templateUrl: './toggle-dark-mode.component.html',
  styleUrls: ['./toggle-dark-mode.component.scss']
})
export class ToggleDarkModeComponent implements OnInit {

  constructor(public settings: SettingsService) { }

  ngOnInit(): void {
  }
}
