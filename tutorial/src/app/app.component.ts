import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  valuee = 10;

  takedata(item: string) {
    console.warn(item);
  }

  // ngDoCheck() {
  //   console.log(this.gender);
  // }
}
