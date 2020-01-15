import  rx from 'rxjs'
import * as operators from 'rxjs/operators';
// @ts-ignore
operators= rx.operators;

const pre = document.querySelector<HTMLPreElement>('#pre');
const btn = document.querySelector<HTMLButtonElement>('#btn');

rx.interval(1000,rx.animationFrameScheduler)
	.pipe(
		operators.map((i) => {
			return new Date();
		})
	).subscribe((time) => {
	pre.innerHTML = time.toString();
});

