import { Component } from '@angular/core';
import { EnrollService } from '../services/enroll.service';
import { SecondService } from '../services/second.service';
@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css'],
})
export class Test2Component {
  title = 'test2';

  constructor(private enrollservice: EnrollService) {}
  onEnroll() {
    this.enrollservice.onEnrollClicked(this.title);
  }
}
