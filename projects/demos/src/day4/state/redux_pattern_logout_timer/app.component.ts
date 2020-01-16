import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {DECREMENT, INCREMENT, RESET} from './coutner.reducer';
import {IState} from './state.model';
import {USER_LOGGED_IN, USER_LOGGED_OUT} from "./login.reducer";


@Component({
	selector: 'app',
	styles: [`
	  .flex-col {
		  display: flex;
		  flex-direction: column;
		  margin-bottom: 20px;
	  }

	  .flex-row {
		  display: flex;
		  flex-direction: row;
	  }
	`],
	template: `
      <counter-component [count]="counter$ | async"></counter-component>
      <div *ngIf="!(loggedIn$ | async)" class="flex-col">
          <span>There is no user logged in</span>
          <div class="flex-row">
              <button (click)="login()">Login</button>
          </div>
      </div>

      <div *ngIf="(loggedIn$ | async)" class="flex-col">
          <span>You are logged in</span>
          <div class="flex-row">
              <button (click)="logout()">Log out</button>
          </div>
      </div>

      <div class="flex-col">
          <span>Counter: {{counter$ | async}}</span>
          <input type="text" #kamaElement [disabled]="!(loggedIn$ | async)" (keyup.Enter)="addToCount(kamaElement.value)"/>
          <div class="flex-row">
              <button (click)="decrement()" [disabled]="!(loggedIn$ | async)">Decrement</button>
              <button (click)="reset()" [disabled]="!(loggedIn$ | async)">Reset</button>
              <button (click)="increment()" [disabled]="!(loggedIn$ | async)">Increment</button>
          </div>
      </div>
	`
})
export class AppComponent {
	counter$: Observable<number>;
	loggedIn$: Observable<boolean>;

	constructor(private store: Store<IState>) {

		this.counter$ = store.select<number>((state: IState) => {
			return state.counter;
		});


		this.loggedIn$ = store.select("loggedIn");

	}

	decrement() {
		this.store.dispatch({type: DECREMENT});
	}

	reset() {
		this.store.dispatch({type: RESET});
	}

	increment() {
		this.store.dispatch({type: INCREMENT, payload: 1});
	}

	addToCount(kama: number) {
		this.store.dispatch({type: INCREMENT, payload: kama});
	}

	login() {
		this.store.dispatch({type: USER_LOGGED_IN});
	}

	logout() {
		this.store.dispatch({type: USER_LOGGED_OUT});
	}
}
