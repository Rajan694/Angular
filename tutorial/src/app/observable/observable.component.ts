import { Component, OnInit } from '@angular/core';
import { Observable, from, map, filter } from 'rxjs';
@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent {
  // myObservable = new Observable<any>((observer) => {
  //   setTimeout(() => {
  //     observer.next(1);
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next(2);
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next(3);
  //   }, 3000);
  //   setTimeout(() => {
  //     observer.error(new Error('Erertyuiijhgfror'));
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.next(5);
  //   }, 5000);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 6000);
  // });

  ara = [1, 2, 3, 4, 5];
  myObservable = from(this.ara).pipe(
    map((data) => {
      return data * 3;
    }),
    filter((data) => {
      return data % 2 === 0;
    })
  );

  ngOnInit() {
    this.myObservable.subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        // console.warn(error.message);
        return alert(error.message);
      },
      () => {
        console.warn('completed');
      }
    );
  }
}
