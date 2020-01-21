import {ChangeDetectorRef, Component} from '@angular/core';
import {MyService} from './my-service';

@Component({
  selector: 'items-count',
  // changeDetection: ChangeDetectionStrategy.OnPush, // when you enable this you will also need the line below
  // or (better) use the async pipe
  template: `
    <div class="badge pull-right">
      <h2>{{count}}</h2>
    </div>
  `
})
export class ItemsCountComponent {
  private count = 0;

  constructor(private myService: MyService, private changeDetectorRef : ChangeDetectorRef) { }

  ngOnInit() {
    this.myService.items$.subscribe(latestCollection => {
      this.count = latestCollection.length;
      console.log('count is: ', this.count);
      // this.changeDetectorRef.markForCheck();
    });
  }
}
