import {Component} from '@angular/core';
import {act, Actions} from '@ngrx/effects';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'space-quest';

  constructor(store: Store<any>, actions: Actions) {
    store.subscribe((state) => {
      (window as any).AppState = state;
    });
    actions.subscribe(console.log);
  }
}
