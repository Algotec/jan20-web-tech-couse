import {AfterViewInit, Component, Directive, ElementRef, Inject, PLATFORM_ID, QueryList, Renderer2, ViewChild, ViewChildren} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

/* BETTER OPTION: */

@Directive({selector: 'li'})
export class LiSelector {
  constructor(public el: ElementRef) {
  }
}

@Component({
  selector: 'ref-to-view-comp1',
  styles: ['input.active {color:red;}'],
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
  @ViewChild('myInput', {static: false}) input: ElementRef;
  @ViewChildren(LiSelector, {read: ElementRef}) listItems: QueryList<ElementRef>;

  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platform) {
  }

  ngAfterViewInit() {
    this.listItems.forEach((el) => console.log(el));
    // we can do lots of DOM manipulations via the renderer which is an abstraction that works on all platforms : eg SSR, NativeScript, browser etc
    this.renderer.addClass(this.input.nativeElement, 'active');
    // but we can't call methods, so sometimes we'll need to check where we render via the platform
    if (isPlatformBrowser(this.platform)) {
      this.input.nativeElement.focus();
      console.log('Focus on the Input');
    }

  }
}
