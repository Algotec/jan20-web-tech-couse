import {Component, NgModule} from '@angular/core';
import {RefToView1Component} from './reftoView.component';
import {LiSelector, RefToView1Component1} from './refToView1.component1';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'app',
  template: `
    <h1>Ref to Child Element</h1>
    <ref-to-view-comp></ref-to-view-comp>
    <!--      <ref-to-view-comp1></ref-to-view-comp1>-->
  `
})
class AppComponent {

}


@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, LiSelector, RefToView1Component, RefToView1Component1],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);

