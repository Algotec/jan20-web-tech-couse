import {Injectable} from '@angular/core';
import { of} from 'rxjs';
import {delay, tap} from 'rxjs/operators';


@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login() {
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = true)
    );
  }

  logout() {
    this.isLoggedIn = false;
  }
}
