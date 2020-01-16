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
        setTimeout(()=>this.data.val=211, 2000);
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

