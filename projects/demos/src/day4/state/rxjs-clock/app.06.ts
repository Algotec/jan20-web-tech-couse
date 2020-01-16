import {Component} from '@angular/core';
import {interval, merge, Subject} from "rxjs";
import {mapTo, scan, startWith} from "rxjs/operators";

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
			this.click$.pipe(mapTo('HOUR')),
			interval(2000).pipe(mapTo('SECOND'))
		).pipe(
			scan((acc: Date, curr: string) => {
				const date = new Date(acc.getTime());
				switch (curr) {
					case 'SECOND' :
						date.setSeconds(date.getSeconds() + 1);
						break;
					case 'HOUR' :
						date.setHours(date.getHours() + 1);
						break;
				}
				return date;
			}, new Date()),
			startWith(new Date()));
	}
}
