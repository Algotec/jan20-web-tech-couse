import {Injectable} from '@angular/core';
import {Observable, timer} from 'rxjs';
import {Store} from '@ngrx/store';
import {IState} from './state.model';
import * as ACTIONS from './login.reducer';
import {filter, map, switchAll, tap} from "rxjs/operators";

@Injectable()
export class AutoLogoutService {

	constructor(private state$: Store<IState>) {
	}

	start() {
		// In our example we're treating any change in global state
		//  as an example of user activity. So to start we need to
		//  just get an observable for the stream of state changes
		//

		// Now here's where the power of RxJS comes into play. We're going to user
		//  a technique where we react to state changes by mapping them to a new
		//  observable that emits a value after the timeour period expires.
		//
		this.state$.pipe(
			// We only want to start an activity timer when a user is actually logged
			//  in, so filter out any state changes where that flag is false.
			//
			filter((x: IState) => x.loggedIn),
			//
			// Now we don't really care what the state change was in this context, and
			//  what we really want is an observable for our specific timeout value. So
			//  we map the state change to an observable that emits a single value after
			//  the timeout.
			//
			// Note, this also means that any state change we care about creates a *new*
			//  observable...and this is how we "reset" the timer when that happens.
			//
			map((x: IState) => timer(5000)),
			//
			// This is just for logging purposes in the demo so we can see when a new
			//  timer is started.
			//
			tap((x: any) => console.log("Activity detected! Timer has reset to 5 seconds")),
			//
			// Now here's the slick part (IMO). Each time a new "timeout" observable is
			//  created we want to make sure it replaces any timer we were subscribed to
			//  before. In other words, as soon as a new timer is started we want to use that
			//  one and just ignore anything we had before.
			//
			// In RxJS that's a simple operator called switchAll().
			//
			switchAll(), // http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-switch
			//https://github.com/ReactiveX/rxjs/blob/master/doc/pipeable-operators.md
			// Finally, we need to subscribe to the timer observable to decide what to do
			//  should it actually fire (i.e., the timeout actually expired). Here we're
			//  just going to dispatch a new action that indicates the timeout expired. Then
			//  the reducer can decide what it actually means based on the state of the
			//  application at the time.
			//
		).subscribe((x) => {
			console.log("Inactivity interval expired! Dispatching timeout event");
			this.state$.dispatch({type: ACTIONS.ACTIVITY_TIMEOUT_OCCURRED});
		});

	}

}
