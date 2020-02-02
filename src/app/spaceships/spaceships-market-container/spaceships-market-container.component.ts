import {Component, OnInit} from '@angular/core';
import {SpaceshipsService} from '../spaceships.service';
import {SpaceShipFactory} from '@algotec/spaceship-parts';
import {BankService} from '../../shared/bank/bank.service';
import {buySpaceship} from '../state/spaceship.actions';
import {SpaceAppState} from '../../reducers/index';
import {Store} from '@ngrx/store';
import {balanceSelector} from '../../shared/bank/bank.state';

@Component({
  selector: 'app-spaceships-market-container',
  templateUrl: './spaceships-market-container.html',
  styleUrls: ['./spaceships-market-container.scss']
})
export class SpaceshipsMarketContainer implements OnInit {
  shipsAvailable$ = this.spaceShipSvc.shipsAvailable$;
  balance$ = this.store.select(balanceSelector);

  constructor(private spaceShipSvc: SpaceshipsService, private store: Store<SpaceAppState>) {
  }

  ngOnInit() {
  }

  buyShip(spaceship: SpaceShipFactory<any>) {
    this.store.dispatch(buySpaceship({ship:spaceship}))
  }
}
