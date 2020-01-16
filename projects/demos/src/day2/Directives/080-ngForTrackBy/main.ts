import {Component, NgModule} from '@angular/core'

import {TrackbyComponent} from './trackby.component';
import {NodeLoggerDirective} from './node-logger.directive';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';

@Component({
    selector: 'app',
    template: `
        <h1>Understanding ngForTrackBy</h1>
        <trackby-comp></trackby-comp>
    `,
})
class AppComponent {}


@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, TrackbyComponent ,NodeLoggerDirective],
  bootstrap: [ AppComponent ],
  providers: [ ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
