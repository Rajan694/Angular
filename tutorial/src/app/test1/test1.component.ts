import { Component } from '@angular/core';
import { EnrollService } from '../services/enroll.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css'],
})
export class Test1Component {
  title = 'test1';
  constructor(private enrollservice: EnrollService) {}

  onEnroll() {
    this.enrollservice.onEnrollClicked(this.title);
  }
}
