import rx from 'rxjs'
import * as operators from 'rxjs/operators';
// @ts-ignore
operators = rx.operators;
const {Observable,fromEvent} = rx;
const {filter,tap, takeUntil,} = operators;
const img: HTMLImageElement = document.querySelector('#logo') as HTMLImageElement;

/// drill 1 - make the angular image draggabe - hint
// start with mouseDown event switch to a new observable of mouse move and take unill mouse up

