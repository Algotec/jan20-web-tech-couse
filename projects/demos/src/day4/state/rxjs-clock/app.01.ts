// 01 - Rendering an Observable with the Async Pipe

import {Component} from '@angular/core';
import {interval} from 'rxjs';

@Component({
	selector: 'app',
	template: `
      <h1>{{clock | async}}</h1>
	`
})
export class App {
	clock = interval(1000);

	constructor() {
		this.clock.subscribe(console.log);
	}
}