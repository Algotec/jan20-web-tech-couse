import {Injectable} from '@angular/core';
import {Dollars} from '@algotec/spaceship-parts';

const initialBalance = 100_000_000;

@Injectable({
  providedIn: 'root'
})
export class BankService {
  get balance(): Dollars {
    return this._balance;
  }

  private _balance: Dollars = initialBalance;

  constructor() {
  }

  deposit(sum: Dollars) {
    this._balance += sum;
  }

  withdraw(sum: Dollars) {
    this._balance -= sum;
  }
}
