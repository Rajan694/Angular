import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  valuee = 10;
  showLoading = false;

  constructor(private authService: AuthService, private router: Router) {}

  takedata(item: string) {
    console.warn(item);
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.showLoading = true;
      }
      if (event instanceof NavigationEnd) {
        this.showLoading = false;
      }
    });
  }

  login() {
    this.authService.login();
  }
  logout() {
    this.authService.logout();
  }
  // ngDoCheck() {
  //   console.log(this.gender);
  // }
}
