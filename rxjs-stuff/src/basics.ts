import rx, {animationFrameScheduler} from 'rxjs'
import * as operators from 'rxjs/operators';
// @ts-ignore
operators = rx.operators;
const {fromEvent} = rx;
const {mergeMap, map, takeUntil,subscribeOn} = operators;
const img: HTMLImageElement = document.querySelector('#logo') as HTMLImageElement;

/// drill 1 - make the angular image draggabe - hint
// start with mouseDown event switch to a new observable of mouse move and take unill mouse up

const mouseDowns$ = fromEvent<MouseEvent>(img, 'mousedown');
const parentMouseMoves$ = fromEvent<MouseEvent>(document, 'mousemove')
const parentMouseUps$ = fromEvent<MouseEvent>(document, 'mouseup');

const drags$ = mouseDowns$.pipe(mergeMap(md => {

	// calculate offsets when mouse down

	const startX = md.clientX + window.scrollX,
		startY = md.clientY + window.scrollY,
		startLeft = parseInt((md.target as HTMLElement).style.left, 10) || 0,
		startTop = parseInt((md.target as HTMLElement).style.top, 10) || 0;


	// Calculate delta with mousemove until mouseup
	return parentMouseMoves$
		.pipe(
			map((mm: MouseEvent) => {
				mm.preventDefault();
				return {
					left: startLeft + mm.clientX - startX,
					top: startTop + mm.clientY - startY
				};
			}),
			takeUntil(parentMouseUps$));
}));


const subscription =
	drags$.pipe(subscribeOn(animationFrameScheduler)).subscribe(
		(e: { left: number, top: number }) => {
			img.style.left = e.left + 'px';
			img.style.top = e.top + 'px';
		});

