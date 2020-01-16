import {Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';

@Component({
	selector: 'yesNo',
	template: `
      <ng-template #defaultTemplate let-dec>
          <button *ngIf="!yesTemplate;else yesTemplate" (click)="dec(true)">{{text.yes}}</button>
          <button *ngIf="!noTemplate;else noTemplate" (click)="dec(false)">{{text.no}}</button>
      </ng-template>
      <ng-container *ngTemplateOutlet="template ||defaultTemplate;context:{$implicit:decide,text:text}"></ng-container>
	`
})

export class YesnoComponent implements OnInit {

	@Output() decision = new EventEmitter<boolean>();
	@Input() text = {yes: 'YES', no: 'NO'};
	@ContentChild(TemplateRef,{static:false}) template;
	@ContentChild('yes',{static:false}) yesTemplate;
	@ContentChild('no',{static:false}) noTemplate;

	decide = (value) => { // notice this must be an arrow or bound function
		console.log('doing work withing the component for', value);
		this.decision.emit(value);
	};

	ngOnInit() { }
}
