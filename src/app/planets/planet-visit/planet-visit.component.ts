import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IPlanetData, planetRouteData} from '../common/common.types';
import {PlanetsService} from '../common/planets.service';

@Component({
  selector: 'app-planet-visit',
  templateUrl: './planet-visit.component.html',
  styleUrls: ['./planet-visit.component.scss']
})
export class PlanetVisitComponent implements OnInit {
  private planet$: Promise<IPlanetData>;
  astronautName: string;

  constructor(private activatedRoute: ActivatedRoute, private planetsService: PlanetsService) {
    this.planet$ = planetsService.getByName$(this.activatedRoute.snapshot.params[planetRouteData]);
  }

  ngOnInit() {
  }

  sign($event: string) {
    console.log($event, 'has signed!');
  }
}
