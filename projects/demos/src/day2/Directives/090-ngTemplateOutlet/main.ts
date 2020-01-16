import {Component, NgModule} from '@angular/core'
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {YesnoComponent} from "./yesno-component";
import {YesnoComponent2} from "./yesno-component2";

@Component({
	selector: 'app',
	template: `
      <!--<yesNo [text]="{yes:'oui',no:'nope'}" (decision)="log($event)">-->
      <!--&lt;!&ndash;<ng-template let-dec let-myText="text">&ndash;&gt;-->
      <!--&lt;!&ndash;<button (click)="dec(true)"><span class="glyphicon glyphicon-ok"></span>{{myText.yes}}</button>&ndash;&gt;-->
      <!--&lt;!&ndash;<button (click)="dec(false)"><span class="glyphicon glyphicon-remove"></span>{{myText.no}}</button>&ndash;&gt;-->
      <!--&lt;!&ndash;</ng-template>&ndash;&gt;-->
      <!--</yesNo>-->
      <yesNo2 #handler>
          <ng-template #no>
              <!--notice the order does not matter - the component decides on the real order-->
              <button (click)="handler.decide(false)"><span class="glyphicon glyphicon-remove"></span></button>
          </ng-template>
          <ng-template #yes>
              <button (click)="handler.decide(true)"><span class="glyphicon glyphicon-ok"></span></button>
          </ng-template>
      </yesNo2>
      <!--[text]="{yes:'כן', no:'לא'}"-->
      <!--<ng-template let-dec let-text="text">-->
          <!--<button (click)="dec(true)"><span class="glyphicon glyphicon-ok"></span>{{text.yes}}</button>-->
          <!--<button (click)="dec(false)"><span class="glyphicon glyphicon-remove"></span>{{text.no}}</button>-->
      <!--</ng-template>-->
	`
})
class AppComponent {
	log($event) {
		console.log($event);
	}
}


@NgModule({
	imports: [BrowserModule],
	declarations: [AppComponent, YesnoComponent, YesnoComponent2],
	bootstrap: [AppComponent],
	providers: []
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);

