import {Component, NgModule, ViewEncapsulation} from '@angular/core';
import {DemoStatesComponent} from './demo-states.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@Component({
    selector: 'app',
    styleUrls: ['style.css'],
    encapsulation: ViewEncapsulation.None,
    template: `
    <demo-states></demo-states>
    `
})
class AppComponent {}


@NgModule({
  imports: [ BrowserModule,BrowserAnimationsModule],
  declarations: [ AppComponent, DemoStatesComponent],
  bootstrap: [ AppComponent ],
  providers: [ ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
