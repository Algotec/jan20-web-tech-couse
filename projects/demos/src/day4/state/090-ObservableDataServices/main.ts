import {Component, NgModule} from '@angular/core'

import {ItemsCountComponent} from './items-count.component';
import {ItemsListComponent} from './items-list.component';
import {MyService} from './my-service';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';


@Component({
    selector: 'app',
    template: `
            <div>
                <items-count></items-count>
                <items-list></items-list>
            </div>
    `
})
class AppComponent {
    today = new Date();
}


@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, ItemsCountComponent, ItemsListComponent],
  bootstrap: [ AppComponent ],
  providers: [ MyService ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
