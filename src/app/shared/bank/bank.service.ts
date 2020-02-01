import {Injectable} from '@angular/core';
import {Dollars} from 'js/ts/dist/index';
import {Observable} from 'rxjs';
import {balanceSelector} from './bank.state';
import {SpaceAppState} from '../../reducers/index';
import {Store} from '@ngrx/store';
import {DepositAction, WithdrawAction} from './bank.actions';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  balance$: Observable<Dollars> = this.store.select(balanceSelector);

  constructor(private store: Store<SpaceAppState>) {
  }

  deposit(sum: Dollars) {
    this.store.dispatch(new DepositAction(sum));
  }

  withdraw(sum: Dollars) {
    this.store.dispatch(new WithdrawAction(sum));
  }
}
