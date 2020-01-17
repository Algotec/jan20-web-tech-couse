import {Injectable} from '@angular/core';
import {Dollars} from '@algotec/spaceship-parts';
import {BehaviorSubject, Observable} from 'rxjs';

const initialBalance = 100_000_000;

@Injectable({
  providedIn: 'root'
})
export class BankService {
  get _balance(): Dollars {
    return this.__balance;
  }

  set _balance(value: Dollars) {
    this.__balance = value;
    this.balanceSubject.next(this.__balance);
  }


  private __balance: Dollars = initialBalance;
  private balanceSubject = new BehaviorSubject<Dollars>(this.__balance);
  balance$: Observable<Dollars> = this.balanceSubject.asObservable();

  constructor() {
  }

  deposit(sum: Dollars) {
    this._balance += sum;

  }

  withdraw(sum: Dollars) {
    this._balance -= sum;
  }
}
