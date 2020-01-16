import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
	selector       : 'cart-badge',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template       : `
        <div class="badge">
            {{counter}}
        </div>
		<button (click)="attachCD(true)">Attach</button>
		<button (click)="attachCD(false)">Detach</button>

    `
})
export class CartBadgeCmp implements OnInit {
	@Input() itemStream:Observable<any>;
	counter = 0;

	constructor(private cd:ChangeDetectorRef) {
	}

	ngOnInit() {
		this.itemStream.subscribe(() => {
			this.counter++;  // state changed
			this.cd.markForCheck(); // marks path
		})
	}

	attachCD(attach:boolean) {
		if (attach) this.cd.reattach();
		else this.cd.detach();
	}
}
