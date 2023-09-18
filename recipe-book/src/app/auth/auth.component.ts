import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  isLoginMode = true;
  onToggle() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: any) {
    console.log(form);
    form.reset();
  }
}
