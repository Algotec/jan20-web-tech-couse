import {Component, NgModule} from '@angular/core'

import {ListItem, RefToContentComponent, RefToContentComponent1} from './refToContent.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@Component({
	selector: 'app',
	template: `
      <h1>Ref to ContentChildren Element</h1>
      <ref-to-content>
          <li *ngFor="let item of items" #listItem> {{item}}</li>
      </ref-to-content>
      <!--<ref-to-content1>-->
          <!--<li *ngFor="let item of items"> {{item}}</li>-->
      <!--</ref-to-content1>-->
	`
})
class AppComponent {
	items = ['sugar', 'salt', 'honey']
}


@NgModule({
	imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
	declarations: [AppComponent, RefToContentComponent, RefToContentComponent1, ListItem],
	bootstrap: [AppComponent],
	providers: []
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
