import {Component, OnInit} from '@angular/core';
import {SpaceshipsService} from '../spaceships.service';
import {SpaceShipFactory} from '@algotec/spaceship-parts';
import {BankService} from '../../shared/bank.service';

@Component({
  selector: 'app-spaceships-market-container',
  templateUrl: './spaceships-market-container.html',
  styleUrls: ['./spaceships-market-container.scss']
})
export class SpaceshipsMarketContainer implements OnInit {
  shipsAvailable$ = this.spaceShipSvc.shipsAvailable$;
  balance = this.bankService.balance;

  constructor(private spaceShipSvc: SpaceshipsService, private bankService: BankService) {
  }

  ngOnInit() {
  }

  buyShip(spaceship: SpaceShipFactory<any>) {
    return this.spaceShipSvc.constructSpaceShip(spaceship);
  }
}
