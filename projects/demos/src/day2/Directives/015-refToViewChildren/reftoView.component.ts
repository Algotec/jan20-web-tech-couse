// Demo: ref to child
import {Component, ElementRef} from '@angular/core';


/* OPTION 1 */
@Component({
	selector: 'ref-to-view-comp',
	template: `
      <input type="text"/>
      <div> Some other content</div>
	`
})
export class RefToView1Component {
	constructor(private el: ElementRef) {
		// not ready yet, will not work!
		// el.nativeElement.querySelector('input').focus();
	}

	ngAfterViewInit() {
		this.el.nativeElement.querySelector('input').focus();

	}
}
