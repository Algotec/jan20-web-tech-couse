import rx from 'rxjs'
import * as operators from 'rxjs/operators';
// @ts-ignore
operators = rx.operators;
const {interval, merge, fromEvent} = rx;
const {mapTo, takeUntil, switchMap, scan, startWith} = operators;

const startButton = document.querySelector('#start');
const halfButton = document.querySelector('#half');
const quarterButton = document.querySelector('#quarter');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');



