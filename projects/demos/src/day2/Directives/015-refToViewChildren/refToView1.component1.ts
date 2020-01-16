import {AfterViewInit, Component, Directive, ElementRef, QueryList, Renderer, ViewChild, ViewChildren} from '@angular/core';

/* BETTER OPTION: */

@Directive({selector: 'li'})
export class LiSelector {
	constructor(public el: ElementRef) {}
}

@Component({
	selector: 'ref-to-view-comp1',
	template: `
      <input #myInput type="text"/>
      <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
      </ul>
      <div> Some other content</div>
	`
})
export class RefToView1Component1 implements AfterViewInit {
	@ViewChild('myInput',{static:false}) input: ElementRef;
	@ViewChildren(LiSelector, {read: ElementRef}) listItems: QueryList<ElementRef>;

	constructor(private renderer: Renderer) {}

	ngAfterViewInit() {
		this.listItems.forEach((el) => console.log(el));
		this.renderer.invokeElementMethod(this.input.nativeElement, 'focus');
		this.input.nativeElement.focus();
		console.log('Focus on the Input');

	}
}
