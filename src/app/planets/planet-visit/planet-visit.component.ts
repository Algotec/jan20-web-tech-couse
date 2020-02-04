import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IPlanetData, IPlanetFormData} from '../common/common.types';
import {PlanetsService} from '../common/planets.service';
import {ISpaceship} from '@algotec/spaceship-parts';

@Component({
  selector: 'app-planet-visit',
  templateUrl: './planet-visit.component.html',
  styleUrls: ['./planet-visit.component.scss']
})
export class PlanetVisitComponent implements OnInit {
  planet: IPlanetData;
  astronautName: string;
  ship: ISpaceship;

  constructor(private activatedRoute: ActivatedRoute, private planetsService: PlanetsService, private router: Router) {
    this.planet = this.activatedRoute.snapshot.data['planet'];
    this.ship = this.activatedRoute.snapshot.data['ship'];

  }

  ngOnInit() {
  }

  planetFormSubmitted($event: IPlanetFormData) {
    this.planetsService.addSampleForm(this.planet.name, $event);
    this.router.navigate(['/planets']);
  }
}
