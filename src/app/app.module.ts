import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BoardComponent } from './board/board.component';
import { FooterComponent } from './footer/footer.component';
import { RulesComponent} from './rules/rules.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatDialogModule} from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardComponent,
    FooterComponent,
    HowToPlayComponent,
    RulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatDialogModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RulesComponent]
})
export class AppModule { }
