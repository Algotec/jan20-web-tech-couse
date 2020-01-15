import rx from 'rxjs'
import * as operators from 'rxjs/operators';
// @ts-ignore
operators = rx.operators;
const {Observable,fromEvent} = rx;
const {filter,tap, takeUntil,} = operators;
const img: HTMLImageElement = document.querySelector('#logo') as HTMLImageElement;

const keyDown$: rx.Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(document, 'keydown');

const reached$ =  new Observable(function (obs) {
	const ob = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.intersectionRatio === 0) {
					obs.next();
				}
			});
		}
	);
	ob.observe(img);
	return function () {
		ob.disconnect();
	};
});

keyDown$
	.pipe(
		filter(key => key.code.includes('Arrow')),
		tap((keyEvent) => console.log(keyEvent)),
		takeUntil(reached$))
	.subscribe((keyEvent) => {
		let val = 0;
		switch (keyEvent.code) {
			case 'ArrowUp':
				val = -10;
				break;
			case 'ArrowDown':
				val = +10;
				break;
		}
		let top = parseInt(img.style.top.replace('px', ''), 10);
		if (isNaN(top)) {
			top = 0;
		}
		img.style.top = top + val + 'px';

	});
