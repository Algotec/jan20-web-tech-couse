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


fromEvent(startButton, 'click').pipe(switchMap((click: Event) => {
	//switch map means that upon each click (previous stream value)  we start a new stream and subscribe to its result
	// old steams are unsubscribed.
	return interval(1000).pipe(map((i) => {
		return i.toString()
	}))
})).subscribe((result: string) => {
	output.innerHTML = result;
})
