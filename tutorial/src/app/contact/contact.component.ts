import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  name: string = '';

  constructor(private route: Router, private activatedroute: ActivatedRoute) {}
  gotohome() {
    this.route.navigate(['home']); //it always uses absolute path

    // this.route.navigate(['home'], {             //for relative route
    //   relativeTo: this.activatedroute,
    // });
  }

  canexit() {
    if (this.name) {
      return confirm('Are you sure you want to exit?');
    } else {
      return true;
    }
  }
}
