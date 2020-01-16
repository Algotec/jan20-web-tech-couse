import {Component} from '@angular/core';
import {interval, merge, Subject} from "rxjs";
import {Store} from '@ngrx/store';
import {map, mapTo} from "rxjs/operators";
import {HOUR, IClockDemoAppState, SECOND} from "./reducers";

@Component({
	selector: 'app',
	template: `
      <input #inputNum type="number" value="0">
      <button (click)="click$.next(inputNum.value)">Update</button>
      <clock [time]="clock | async"></clock>
	`
})
export class App {
	click$ = new Subject().pipe(map((value: string) => ({type: HOUR, payload: parseInt(value)})));
	seconds$ = interval(1000).pipe(mapTo({type: SECOND, payload: 3}));

	clock;

	constructor(store: Store<IClockDemoAppState>) {
		this.clock = store.select('clock');

		merge(this.click$, this.seconds$).subscribe(store.dispatch.bind(store));
	}
}