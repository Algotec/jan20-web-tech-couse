import {NgModule} from '@angular/core';
////module boilerplate
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {App} from "./app.14";
import {Clock} from "./clock";
import {clock, people} from "./reducers";
import {StoreModule} from "@ngrx/store";


@NgModule({
	imports: [BrowserModule, StoreModule.forRoot({clock, people})],
	declarations: [App, Clock],
	bootstrap: [App],
	providers: []
})
export class AppModule {}

//// bootstrap
platformBrowserDynamic().bootstrapModule(AppModule);

