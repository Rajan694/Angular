import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //Reactive form
  //////////////////////////////////////////////////////////////////////////////////////////////////
  signUpForm: FormGroup;
  forbiddenUserNames = ['Chris', 'Anna'];

  ngOnInit() {
    this.signUpForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        this.forbiddenNames.bind(this),
      ]),
      password: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, Validators.required),
      email: new FormControl(
        null,
        [Validators.required, Validators.email],
        this.forbiddenEmails
      ),
      phoneNumber: new FormControl(null),
      gender: new FormControl('male'),
      address: new FormGroup({
        city: new FormControl(''),
        state: new FormControl(''),
        postalCode: new FormControl(''),
      }),
      hobbies: new FormArray([new FormControl(null, Validators.required)]),
    });
  }
  //template form
  //////////////////////////////////////////////////////////////////////////////////////////////////
  subscriptions = ['basic', 'advanced', 'intermediate'];
  defaultSubscription = 'basic';

  onSubmit1(form: any) {
    console.log(form.value);
  }

  onSubmit(form: any) {
    console.log(form);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  onRemoveHobby(i: number) {
    (<FormArray>this.signUpForm.get('hobbies')).removeAt(i);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@example.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  //////////////////////////////////////////////////////////////////////////////////////////////
  serverElements = [
    { type: 'server', name: 'Testserver', content: 'Just a test!' },
  ];
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

  onintervalfired(lastnumber: number) {
    if (lastnumber % 2 === 0) {
      this.evenNumbers.push(lastnumber);
    } else {
      this.oddNumbers.push(lastnumber);
    }
  }
}
