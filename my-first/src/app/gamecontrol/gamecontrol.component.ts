import { Component, EventEmitter, Output } from '@angular/core';
// import { interval } from 'rxjs';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css'],
})
export class GamecontrolComponent {
  @Output() intervalfired = new EventEmitter<number>();
  interval;
  lastnumber = 0;

  startgame() {
    this.interval = setInterval(() => {
      this.intervalfired.emit(++this.lastnumber);
    }, 1000);
  }
  pausegame() {
    clearInterval(this.interval);
  }
}
