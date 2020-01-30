import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ISpaceship} from '@algotec/spaceship-parts';
import {SpaceshipsService} from '../spaceships.service';
import {filter, map} from 'rxjs/operators';
import {ShipWithPosition} from '../../planets/common/common.types';

@Component({
  selector: 'app-planet-ships-container',
  template: `
    <app-my-ships [ships]="planetShips$|async"></app-my-ships>
  `,
  styles: []
})
export class PlanetShipsContainerComponent implements OnInit {
  @Input() planet: string;

  constructor(private spaceshipsService: SpaceshipsService) {
  }

  planetShips$: Observable<{ [shipId: string]: ISpaceship }>

  ngOnInit() {
    this.planetShips$ =
      this.spaceshipsService.myShips$.pipe(
        map(shipWithposArr => shipWithposArr
          .reduce((acc, shipWithPos, index: number) => {
            if (shipWithPos.anchorPlanet === this.planet) {// group the ships by the anchorPlanet
              acc[index] = shipWithPos.ship
            }
            return acc
          }, {} as { [shipId: number]: ISpaceship })
        ));

  }

}
