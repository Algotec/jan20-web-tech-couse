import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {BankState} from '../shared/bank/bank.state';
import {bankReducer} from '../shared/bank/bank.reducer';
import {InjectionToken} from '@angular/core';

export interface SpaceAppState {
  bank: BankState
}

export const reducersToken = new InjectionToken<ActionReducerMap<SpaceAppState>>('reducers');
export const reducers: ActionReducerMap<SpaceAppState> = {
  bank: bankReducer
};

export function reducersFactory(): ActionReducerMap<SpaceAppState> {
  return reducers;
}

export const metaReducers: MetaReducer<SpaceAppState>[] = !environment.production ? [] : [];
