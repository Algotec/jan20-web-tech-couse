import {Component, Input, OnInit} from '@angular/core';
import {SpaceshipsService} from '../spaceships.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-planet-spaceships-container',
  template: `
    <p>
      ships on {{planetName}}:
      <app-spaceship-icon *ngFor="let ship of shipsOnPlanet$|async" [ship]="ship.ship"></app-spaceship-icon>
    </p>
  `,
  styles: [`:host {
    font-size: 9px;
  }`]
})
export class PlanetSpaceshipsContainerComponent implements OnInit {
  @Input() planetName: string;
  shipsOnPlanet$ = this.spaceshipsService.myShips$.pipe(
    map((allShipsWIthPos) => {
      return allShipsWIthPos.filter(shipWithPos => shipWithPos.anchorPlanet === this.planetName)
    }));

  constructor(private spaceshipsService: SpaceshipsService) {

  }

  ngOnInit() {
  }

}
