import rx from 'rxjs'
import * as operators from 'rxjs/operators';
// @ts-ignore
operators = rx.operators;
const {interval, merge, fromEvent} = rx;
const {mapTo, takeUntil, switchMap, map, scan, startWith} = operators;

const startButton = document.querySelector('#start');
const halfButton = document.querySelector('#half');
const quarterButton = document.querySelector('#quarter');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');
const output = document.querySelector('#output');

const start$ = fromEvent(startButton, 'click').pipe(mapTo(1000));
const half$ = fromEvent(halfButton, 'click').pipe(mapTo(500));
const quarter$ = fromEvent(quarterButton, 'click').pipe(mapTo(250));
const reset = () => 0;
const reset$ = fromEvent(resetButton, 'click').pipe(mapTo(reset));
const stop$ = fromEvent(stopButton, 'click');
const initial = 0;
const inc = (i: number) => i + 1;
const starters$ = merge(start$, half$, quarter$)
const incs$ = starters$.pipe(switchMap((time: number) => {
	//switch map means that upon each click (previous stream value)  we start a new stream and subscribe to its result
	// old steams are unsubscribed.
	return interval(time)
		.pipe(
			mapTo(inc),
			takeUntil(stop$)
		);
}));

merge(reset$, incs$).pipe(
	scan((acc, fn) => fn(acc), initial),
	startWith(0),
).subscribe((result: number) => {
	output.innerHTML = result.toString();
})
