import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {animationFrameScheduler, fromEvent} from 'rxjs';
import {map, subscribeOn} from 'rxjs/operators';
import {BankService} from '../../shared/bank/bank.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private bankService: BankService,private cdr:ChangeDetectorRef) {
  }

  showBlackBg: boolean = false;

  currentBalance$ = this.bankService.balance$;


  ngOnInit() {
    fromEvent(window, 'scroll').pipe(
      subscribeOn(animationFrameScheduler),
      map(() => window.scrollY > 120),
    ).subscribe((showBg: boolean) => {
      this.showBlackBg = showBg;
      this.cdr.markForCheck();
    });
  }

}
