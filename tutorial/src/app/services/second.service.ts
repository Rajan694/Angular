import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SecondService {
  constructor() {}
  secservice(title: string) {
    console.log(title);
  }
}
