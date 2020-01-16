import {ActionReducer} from "@ngrx/store";
import {initialState} from "./state.model";
import {ActionWithPayload} from "./main";


export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

// This is the action fired when the activity timeout occured.
//  We keep it generic so the reducer can take any number 
//  of actions based on it (including perhaps none)
//


export const counterReducer: ActionReducer<number> = (counter: number = initialState.counter, action: ActionWithPayload): number => {
	switch (action.type) {
		case INCREMENT:
			return counter + (+action.payload);
		case DECREMENT:
			return counter - 1;
		case RESET:
			return 0;
		default:
			return counter;
	}

}