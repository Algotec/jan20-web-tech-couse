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
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app',
  templateUrl: 'form.html',
})
class AppComponent {
  log = console.log;
}


@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, MatCardModule, MatButtonModule,
    MatInputModule, MatSelectModule, MatFormFieldModule, MatRadioModule, MatCheckboxModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
