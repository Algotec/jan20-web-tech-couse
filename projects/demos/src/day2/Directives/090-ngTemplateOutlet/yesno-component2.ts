import {Component, ContentChild, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
	selector: 'yesNo2',
	template: `
      <button *ngIf="!yesTemplate;else yesTemplate" (click)="decide(true)">{{text.yes}}</button>
      <button *ngIf="!noTemplate;else noTemplate" (click)="decide(false)">{{text.no}}</button>
	`
})

export class YesnoComponent2 implements OnInit {

	@Output() decision = new EventEmitter<boolean>();
	@Input() text = {yes: 'YES', no: 'NO'};
	@ContentChild('yes',{static:false}) yesTemplate;
	@ContentChild('no',{static:false}) noTemplate;

	decide = (value) => { // notice this must be an arrow or bound function
		console.log('doing work withing the component for', value);
		this.decision.emit(value);
	};

	ngOnInit() { }
}
