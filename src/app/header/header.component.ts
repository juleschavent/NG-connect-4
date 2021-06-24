import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RulesComponent } from '../rules/rules.component';
import { HowToPlayComponent } from '../how-to-play/how-to-play.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(RulesComponent);
  }

  ngOnInit(): void {
  }


  ngAfterViewInit() {
    this.dialog.open(HowToPlayComponent);
  }

}
