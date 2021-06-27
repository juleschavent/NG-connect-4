import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HowToPlayComponent } from '../how-to-play/how-to-play.component';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog, public settings: SettingsService) { }

  ngOnInit(): void {
  }


  ngAfterViewInit() {
    this.dialog.open(HowToPlayComponent);
  }

}
