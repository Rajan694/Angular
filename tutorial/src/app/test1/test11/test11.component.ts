import { Component } from '@angular/core';
import { EnrollService } from '../../services/enroll.service';
import { SecondService } from '../../services/second.service';
@Component({
  selector: 'app-test11',
  templateUrl: './test11.component.html',
  styleUrls: ['./test11.component.css'],
})
export class Test11Component {
  title = 'test11';

  constructor(
    private enrollservice: EnrollService,
    private secondservice: SecondService
  ) {}
  onEnroll() {
    this.enrollservice.onEnrollClicked(this.title);
  }
}
