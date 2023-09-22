import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
})
export class Child1Component {
  @Input() item: any;
  @Output() takedataevent = new EventEmitter<string>();
  name: string = 'Rajan';
  age = 25;
  gender = 'male';
  count = 0;
  users = ['tony', 'jack', 'john'];

  today = new Date();
  user = {
    name: 'Rajan',
    age: 25,
  };

  ngOnInit() {
    console.log(this.gender);
  }
  counter(type: string) {
    type === 'plus' ? this.count++ : this.count--;
  }
  aler(val: string) {
    console.log(val);
  }
}
