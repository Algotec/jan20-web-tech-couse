import {Component} from '@angular/core';
import {interval, merge, Subject} from "rxjs";
import {map, mapTo, withLatestFrom} from "rxjs/operators";
import {Store} from '@ngrx/store';
import {ADVANCE, HOUR, IClockDemoAppState, RECALL, SECOND} from './reducers';

@Component({
	selector: 'app',
	template: `
      <input #inputNum type="number" value="0">
      <button (click)="click$.next(inputNum.value)">Update</button>
      <clock [time]="time | async"></clock>

      <div (click)="person$.next(person)" *ngFor="let person of people | async">
          {{person.name}} is in {{person.time | date:'hh:mm:ss'}}
      </div>
      <button (click)="recall$.next()">RECALL</button>
	`
})
export class App {
	click$ = new Subject().pipe(map((value: string) => ({type: HOUR, payload: parseInt(value)})));
	seconds$ = interval(1000).pipe(mapTo({type: SECOND, payload: 1}));
	person$ = new Subject().pipe(map((value) => ({payload: value, type: ADVANCE})));
	recall$ = new Subject();

	time;
	people;

	constructor(store: Store<IClockDemoAppState>) {
		this.time = store.select('clock');
		this.people = store.select('people');

		merge(this.click$, this.seconds$, this.person$,
			this.recall$.pipe(
				withLatestFrom(this.time, (_, y) => y),
				map((time) => ({type: RECALL, payload: time}))
			)).subscribe(store.dispatch.bind(store));
	}
}