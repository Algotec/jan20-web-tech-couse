import {Component, NgModule} from '@angular/core'

import {CollapseComponent} from './collapse.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';

@Component({
	selector: 'app',
	template: `
      <h1>Simple Content Projection</h1>
      <collapse (open)="say($event)" (close)="say($event)" title="More Details">
          <h1>This is a collapsible content.</h1>
          <p class="txt">{{name}}: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis et voluptas alias maxime iste velit, eligendi ipsa
              delectus sed impedit deserunt ratione provident in, repellat dolore distinctio odio dolorem sequi.</p>
      </collapse>
	`
})
class AppComponent {
	name = 'Puki';

	say(what) {
		console.log('Saying: ', what);
	}
}


@NgModule({
	imports: [BrowserModule],
	declarations: [AppComponent, CollapseComponent],
	bootstrap: [AppComponent],
	providers: []
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

