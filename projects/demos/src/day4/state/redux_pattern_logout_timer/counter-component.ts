import {Component, Input, OnInit} from "@angular/core";

@Component({
	selector: 'counter-component',
	template: '<div>{{count}}</div>'
})
export class CounterComponent implements OnInit {
	@Input() count;

	constructor() { }

	ngOnInit() { }

}