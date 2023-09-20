import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  age = 25;
  gender = 'male';
  count = 0;

  ngOnInit() {
    console.log(this.gender);
  }
  counter(type: string) {
    type === 'plus' ? this.count++ : this.count--;
  }
  aler(val: string) {
    console.log(val);
  }
  // ngDoCheck() {
  //   console.log(this.gender);
  // }
}