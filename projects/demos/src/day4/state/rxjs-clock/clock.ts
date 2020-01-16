import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
	selector: 'clock',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<h3>{{time | date:'y MMMM EEEE hh:mm:ss'}}</h3>`
})
export class Clock {
	@Input() time;
}