import {Component} from '@angular/core';
import {interval, merge, Subject} from "rxjs";
import {scan, startWith} from "rxjs/operators";

@Component({
  selector: 'app',
  template: `
    <button (click)="click$.next()">Update</button>
    <h1>{{clock | async | date:'y MMMM EEEE hh:mm:ss'}}</h1>
  `
})
export class App {
  click$ = new Subject();

  clock;

  constructor() {
    this.clock = merge(
      this.click$,
      interval(2000)
    ).pipe(
      startWith(new Date()),
      scan((acc, curr) => {
        const date = new Date(acc.getTime());

        date.setSeconds(date.getSeconds() + 1);

        return date;
      }, null));
  }
}
