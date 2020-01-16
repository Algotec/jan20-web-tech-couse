import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {App} from './app1';
import {WikipediaService} from './wikipedia-servico'
// //this
// import {WikipediaService} from './wikipedia-service';
// import {App} from './app';

//or this


@NgModule({
	imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientJsonpModule, HttpClientModule],
	declarations: [App],
	bootstrap: [App],
	providers: [WikipediaService]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
