import {Component} from '@angular/core';
import {interval, merge, Subject} from "rxjs";
import {map, mapTo} from "rxjs/operators";
import {Store} from '@ngrx/store';
import {ADVANCE, HOUR, IClockDemoAppState, SECOND} from './reducers';

@Component({
	selector: 'app',
	template: `
      <input #inputNum type="number" value="0">
      <button (click)="click$.next(inputNum.value)">Update</button>
      <clock [time]="time | async"></clock>

      <div (click)="person$.next(person)" *ngFor="let person of people | async">
          {{person.name}} is in {{person.time | date:'hh:mm:ss'}}
      </div>
	`
})
export class App {
	click$ = new Subject().pipe(map((value: string) => ({type: HOUR, payload: parseInt(value)})));
	seconds$ = interval(1000).pipe(mapTo({type: SECOND, payload: 1}));
	person$ = new Subject().pipe(map((value) => ({payload: value, type: ADVANCE})));

	time;
	people;

	constructor(store: Store<IClockDemoAppState>) {
		this.time = store.select('clock');
		this.people = store.select('people');

		merge(this.click$, this.seconds$, this.person$).subscribe(store.dispatch.bind(store));
	}
}