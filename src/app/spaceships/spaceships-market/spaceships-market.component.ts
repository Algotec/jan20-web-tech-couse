import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Dollars, SpaceShipFactory} from '@algotec/spaceship-parts';

@Component({
  selector: 'app-spaceships-market',
  templateUrl: './spaceships-market.component.html',
  styleUrls: ['./spaceships-market.component.scss']
})
export class SpaceshipsMarketComponent implements OnInit {
  @Input() ships: { [key: string]: SpaceShipFactory<any> };
  @Input() currentBalance: Dollars;
  @Output() buyShip = new EventEmitter<SpaceShipFactory<any>>();

  constructor() {
  }

  ngOnInit() {
  }

  hasMoneyFor(price: Dollars) {
    return this.currentBalance >= price;
  }
}
