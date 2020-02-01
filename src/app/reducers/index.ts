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

export interface SpaceAppState {
  bank: BankState
}

export const reducers: ActionReducerMap<SpaceAppState> = {
  bank: bankReducer
};


export const metaReducers: MetaReducer<SpaceAppState>[] = !environment.production ? [] : [];
