import {initialState} from "./state.model";

export const USER_LOGGED_IN = "USER_LOGGED_IN";
export const USER_LOGGED_OUT = "USER_LOGGED_OUT";
export const ACTIVITY_TIMEOUT_OCCURRED = "ACTIVITY_TIMEOUT_OCCURRED";

export function LoginReducer(state = initialState.loggedIn, action): boolean {
	switch (action.type) {
		case USER_LOGGED_IN:
			return true;
		case USER_LOGGED_OUT:
		case ACTIVITY_TIMEOUT_OCCURRED:
			return false;
		default:
			return state;
	}
}
