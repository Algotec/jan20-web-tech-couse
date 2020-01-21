import {Component, OnInit} from '@angular/core';
import {PlanetsService} from '../common/planets.service';
import {IPlanetData} from '../common/common.types';
import {Observable} from 'rxjs';
import {basePlanetPos, SpaceshipsService} from '../../spaceships/spaceships.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-planets-view',
  templateUrl: './planets-view.component.html',
  styleUrls: ['./planets-view.component.scss']
})
export class PlanetsViewComponent implements OnInit {
  planets: Observable<IPlanetData[]> = this.planetsService.getAll();
  myShips$ = this.spaceshipsSvc.myShips$.pipe(
    map(shipWithposArr => shipWithposArr
      .filter(shipWithPos => shipWithPos.anchorPlanet === basePlanetPos.anchorPlanet) //only on earth
      .map(shipWithPos => shipWithPos.ship))); // we only need the ship

  constructor(private planetsService: PlanetsService, private spaceshipsSvc: SpaceshipsService) {
  }


  ngOnInit() {
  }

}
