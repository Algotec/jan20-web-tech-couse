import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SpaceAppState} from '../../reducers/index';

export interface BankState {
  balance: number
}


export const bankSelector = createFeatureSelector<SpaceAppState, BankState>('bank');
export const balanceSelector = createSelector(bankSelector, (bank) => bank.balance);
