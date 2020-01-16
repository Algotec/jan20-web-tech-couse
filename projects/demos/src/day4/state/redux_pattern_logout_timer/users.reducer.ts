import {initialState, User} from "./state.model";
import {ActionWithPayload} from "./main";

export type UserState = User[];

export function usersRecuder(state: UserState = initialState.users, action: ActionWithPayload): UserState {
	switch (action.type) {
		case 'ADD_USER':
			return [...state, {firstName: action.payload}];
		case 'DEL_USER':
			let index = action.payload;
			return [...state.slice(0, index), ...state.slice(index + 1)];
		default:
			return state;
	}
}
