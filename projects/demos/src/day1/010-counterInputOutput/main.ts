import {Component, NgModule} from '@angular/core';
import {CounterComponent} from './counter.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';

@Component({
    selector: 'app',
    template: `
        <h1>Input and Output</h1>
        <counter [init]="data" (change)="counterChanged($event)"></counter>
    `
})
class AppComponent {
    data = {val : 99}

    constructor() {
        setTimeout(()=>this.data.val=211, 2000); // see how even changing a nested property will be reflected in the dom
        // because it is wrapped in setTimeout, all async events are wrapped by zone.js and all changes are naturally async
        // however if we want speed - we can mark the component (counter) as OnPush for change detection and angular will skip its changeDetection
        // if its inputs haven't changed  -
    }
    counterChanged($event){
        console.log('counter value: ' , $event);
    }

}


@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, CounterComponent],
  bootstrap: [ AppComponent ],
  providers: [ ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

