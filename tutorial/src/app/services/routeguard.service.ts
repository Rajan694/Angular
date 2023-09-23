import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { ContactComponent } from '../contact/contact.component';

export interface IDeactivateComponent {
  canexit(): boolean;
}

@Injectable({
  providedIn: 'root',
})

//use interface to make general purpose canDeactivate function
export class RouteguardService {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['home']);
      return false;
    }
  }

  canDeactivate(
    component: IDeactivateComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return component.canexit();
  }
}
