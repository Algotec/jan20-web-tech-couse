import {Component, NgModule} from '@angular/core';
import {Product1Component} from './product.component.1';
import {Product2Component} from './product.component.2';
import {Product3Component} from './product.component.3';
import {Product4Component} from './product.component.4';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
	selector: 'app',
	template: `
      <h1>Handling Forms</h1>
      <product1></product1>
      <product2></product2>
      <product3></product3>
      <product4></product4>
	`

})
class AppComponent {
}


@NgModule({
	imports: [BrowserModule, FormsModule, ReactiveFormsModule],
	declarations: [AppComponent, Product1Component, Product2Component, Product3Component, Product4Component],
	bootstrap: [AppComponent],
	providers: []
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
