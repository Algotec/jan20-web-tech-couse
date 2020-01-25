import {Component, OnInit} from '@angular/core';
import {PlanetsService} from '../common/planets.service';
import {IPlanetData} from '../common/common.types';
import {Observable} from 'rxjs';
import {basePlanetPos, SpaceshipsService} from '../../spaceships/spaceships.service';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import { ISpaceship } from '@algotec/spaceship-parts';

@Component({
  selector: 'app-planets-view',
  templateUrl: './planets-view.component.html',
  styleUrls: ['./planets-view.component.scss']
})
export class PlanetsViewComponent implements OnInit {
  boxOnPlanet: string;
  planets: Observable<IPlanetData[]> = this.planetsService.getAll();
  myShips$ = this.spaceshipsSvc.myShips$.pipe(
    map(shipWithposArr => shipWithposArr
      .reduce((acc,shipWithPos) => {
        // group the ships by the anchorPlanet
          const planetShips = acc[shipWithPos.anchorPlanet] ? acc[shipWithPos.anchorPlanet] : [];
          acc[shipWithPos.anchorPlanet] = [...planetShips,shipWithPos.ship];
        return acc
      },{} as {[key:string]:ISpaceship[]}) //only on earth
      )); // we only need the ship
  private fromPlanet: string ='';

  constructor(private planetsService: PlanetsService, private spaceshipsSvc: SpaceshipsService, private router: Router) {
  }

  onDrop($event: DragEvent, planet: string) {
    $event.preventDefault();
    let ship = $event.dataTransfer.getData("text");
    console.log($event, planet, ship);
    this.router.navigate(['journey', ship, 'from', this.fromPlanet, 'to', planet])
  };

  onDragOver($event: DragEvent, planet: string) {
    $event.preventDefault();
    this.boxOnPlanet = planet;
  }

  onDragLeave($event: DragEvent, planet: string) {
    $event.preventDefault(); // notice (by  logs) that this happens too often,
    // in less naive implementations - we would use RXjs for some throttling
    console.log('onleave happened');
    this.boxOnPlanet = '';

  }
  onDragStart(fromPlanet:string){
    this.fromPlanet = fromPlanet;
  }
  ngOnInit() {
  }

}
