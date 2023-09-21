import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UsdToinrPipe } from '../pipes/usd-toinr.pipe';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
})
export class Child1Component {
  @Input() item: any;
  @Output() takedataevent = new EventEmitter<string>();
  name = 'Rajan';
  today = new Date();
  user = {
    name: 'Rajan',
    age: 25,
  };
}
