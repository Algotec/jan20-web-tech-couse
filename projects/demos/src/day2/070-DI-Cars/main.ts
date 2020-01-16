import {Component, NgModule} from '@angular/core';
import {CarsComponent} from './cars.component';
import {CarComponent} from './car.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';

@Component({
	selector: 'app',
	template: `
        <h1>Playground</h1>
        <cars></cars>
    `,
})
class AppComponent {
}


@NgModule({
	imports: [BrowserModule],
	declarations: [AppComponent, CarsComponent, CarComponent],
	bootstrap: [AppComponent],
	providers: []
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);

