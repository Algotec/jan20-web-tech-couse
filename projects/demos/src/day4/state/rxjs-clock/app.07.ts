import {Component} from '@angular/core';
import {interval, merge, Subject} from "rxjs";
import {Store} from '@ngrx/store';
import {mapTo} from "rxjs/operators";
import {IClockDemoAppState} from "./reducers";

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

	constructor(store: Store<IClockDemoAppState>) {
		this.clock = store.select('clock');


		merge(
			this.click$.pipe(mapTo('HOUR')),
			interval(2000).pipe(mapTo('SECOND'))
		).subscribe((type) => {
			store.dispatch({type})
		})
	}
}