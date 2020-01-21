import {ChangeDetectionStrategy, Component, NgModule} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

@Component({
	selector: 'app',
	changeDetection:ChangeDetectionStrategy.OnPush,
	template: `<h3 [title]="monster.name" [style.color]="monster.color">
      Monster of the month: {{monster.name}}
      <!--alternate syntax for event & data binding -->
  </h3>
  <button [hidden]="!visibleFlag" (click)="sayHello($event)">Say Hello</button>
     <div style="float:right" (mouseout)="toggelVisibleFlag()">Toggle</div>
  <hr/>
  <input #input (keydown)="onKey($event)" (keydown.backspace)="values=''"/>
  <pre>{{monster.dkajdaj?.ucu2}}</pre>
  <pre>{{monster|json}}</pre>
  <pre>{{values|json}}</pre>
	`
}) // remember to show the binding to input.value
class AppComponent {
	private monster = {name: 'Ugi', color: 'orange', nicks: ['Ogush', 'Ugion', 'Cookie Monster']};
	private values = '';
	visibleFlag = true;

	sayHello(e) {
		console.log(e)
		this.monster.name = 'Uzi';
		this.monster.color = '#c2d2f2'
	}

	toggelVisibleFlag() {
		this.visibleFlag = !this.visibleFlag;
	}

	onKey(event: any) {
		this.values += event.target.value + ' | ';
	}
}


@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [AppComponent],
	bootstrap: [AppComponent],
	providers: []
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
