import { Injectable } from '@angular/core';
import { SecondService } from './second.service';
@Injectable({
  providedIn: 'root',
})
export class EnrollService {
  constructor(private secondservice: SecondService) {}
  onEnrollClicked(title: string) {
    alert(`You have enrolled for ${title}`);
    this.secondservice.secservice(title);
  }
}
