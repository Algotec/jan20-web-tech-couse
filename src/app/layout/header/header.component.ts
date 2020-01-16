import {Component, OnInit} from '@angular/core';
import {animationFrameScheduler, fromEvent} from 'rxjs';
import {map, subscribeOn} from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  showBlackBg: boolean = false;


  ngOnInit() {
    fromEvent(window, 'scroll').pipe(
      subscribeOn(animationFrameScheduler),
      map(() => window.scrollY > 120),
    ).subscribe((showBg: boolean) => {
      this.showBlackBg = showBg;
    });
  }

}
