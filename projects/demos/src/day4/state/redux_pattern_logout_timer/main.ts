import {Action, StoreModule} from "@ngrx/store";
import {counterReducer} from "./coutner.reducer";
import {AppComponent} from "./app.component";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AutoLogoutService} from "./auto-logout.service";
import {usersRecuder} from "./users.reducer";
import {CounterComponent} from "./counter-component";
import {LoginReducer} from "./login.reducer";

export interface ActionWithPayload extends Action {
	payload?: any;
}

@NgModule({
	declarations: [AppComponent, CounterComponent],
	imports: [BrowserModule, StoreModule.forRoot({
		counter: counterReducer,
		users: usersRecuder,
		loggedIn: LoginReducer
	})],
	bootstrap: [AppComponent],
	providers: [AutoLogoutService]
})
class AppModule {
	constructor(al: AutoLogoutService) {
		al.start();
	}

}

platformBrowserDynamic().bootstrapModule(AppModule).catch((e) => console.error(e));

