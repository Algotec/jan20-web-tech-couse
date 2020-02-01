import {Action} from '@ngrx/store';
import { Dollars } from '@algotec/spaceship-parts';

export enum BalanceActionTypes {
  DEPOSIT = '[balance] DEPOSIT',
  WITHDRAW = '[balance] WITHDRAW'
}

export class DepositAction implements Action {
  readonly type = BalanceActionTypes.DEPOSIT;

  constructor(public amount: Dollars) {
  }
}

export class WithdrawAction implements Action {
  readonly type = BalanceActionTypes.WITHDRAW;

  constructor(public amount: Dollars) {
  }
}

export type balanceActions = WithdrawAction | DepositAction;
