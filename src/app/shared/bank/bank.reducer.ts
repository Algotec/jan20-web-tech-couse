import {Dollars} from '@algotec/spaceship-parts';
import {balanceActions, BalanceActionTypes} from './bank.actions';
import {combineReducers} from '@ngrx/store';

const initialBalance = 100_000_000;

export function balanceReducer(balance: Dollars = initialBalance, action: balanceActions) {
  switch (action.type) {
    case BalanceActionTypes.WITHDRAW:
      return balance - action.amount;
      break;
    case BalanceActionTypes.DEPOSIT:
      return balance + action.amount;
      break;
  }
  return balance;
}
export const bankReducer = combineReducers({balance:balanceReducer});
