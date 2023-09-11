import { Component } from '@angular/core';

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.css'],
})
export class NewcompComponent {
  name = 'Rajan';
  age = 20;
  temp = '';

  changeName() {
    this.name = 'Raj';
    this.age = 21;
  }
  changeName2() {
    this.name = 'Rajan';
    this.age = 22;
  }
  tempfunc(event: any) {
    console.log(event);
    this.temp = event.target.value;
  }
}
