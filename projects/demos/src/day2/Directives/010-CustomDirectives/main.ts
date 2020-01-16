import {Component, NgModule} from '@angular/core'

import {HighlightDirective} from './highlight.directive';
import {ColoringInputDirective} from './coloring-input.directive-fixed';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';

@Component({
	selector: 'app',
	styles: [`.other {
	  text-transform: uppercase
  }`],
	template: `
      <section>
          <div class="well" myHighlight>Me? Just a silly Custom Directive</div>
          <hr/>
          <h3>Happy Textbox</h3>
          <input class="form-control" [coloring-input]="data"/>
      </section>
	`
})
class AppComponent {
	private data = 'Just Saying';
}


@NgModule({
	imports: [BrowserModule],
	declarations: [AppComponent, HighlightDirective, ColoringInputDirective],
	bootstrap: [AppComponent],
	providers: []
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

