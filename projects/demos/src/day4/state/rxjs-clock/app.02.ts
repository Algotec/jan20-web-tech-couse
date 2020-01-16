// 02 - Rendering an Observable Date with the Async and Date Pipes

import {Component} from '@angular/core';
import {interval} from "rxjs";
import {map} from "rxjs/operators";

@Component({
	selector: 'app',
	template: `
      <h1>{{clock | async | date:'hh:mm:ss'}}</h1>
	`
})
export class App {
	clock = interval(1000).pipe(map(() => new Date()));
}