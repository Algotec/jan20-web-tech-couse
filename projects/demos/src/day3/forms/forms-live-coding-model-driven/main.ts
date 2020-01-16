import {Component, NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule
} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {ModelFormComponent} from './model-form';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@Component({
	selector: 'app',
	template: '<model-form-edit></model-form-edit>',
})
class AppComponent {
}


@NgModule({
	imports: [BrowserModule, ReactiveFormsModule,
		BrowserAnimationsModule, MatCardModule, MatButtonModule,
		MatInputModule, MatSelectModule, MatFormFieldModule, MatRadioModule, MatCheckboxModule],
	declarations: [AppComponent, ModelFormComponent],
	bootstrap: [AppComponent],
	providers: []
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
