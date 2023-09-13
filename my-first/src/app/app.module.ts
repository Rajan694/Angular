import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { GamecontrolComponent } from './gamecontrol/gamecontrol.component';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
import { BetterhighlightDirective } from './betterhighlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    GamecontrolComponent,
    EvenComponent,
    OddComponent,
    BetterhighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
