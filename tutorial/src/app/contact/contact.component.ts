import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  constructor(private route: Router, private activatedroute: ActivatedRoute) {}
  gotohome() {
    this.route.navigate(['home']); //it always uses absolute path

    // this.route.navigate(['home'], {             //for relative route
    //   relativeTo: this.activatedroute,
    // });
  }
}
