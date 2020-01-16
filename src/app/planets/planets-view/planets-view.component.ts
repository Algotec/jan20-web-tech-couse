import {Component, OnInit} from '@angular/core';
import {PlanetsService} from '../common/planets.service';
import {IPlanetData} from '../common/common.types';

@Component({
  selector: 'app-planets-view',
  templateUrl: './planets-view.component.html',
  styleUrls: ['./planets-view.component.scss']
})
export class PlanetsViewComponent implements OnInit {
  planets: Promise<IPlanetData[]> = this.planetsService.getAll();

  constructor(private planetsService: PlanetsService) {
  }


  ngOnInit() {
  }

}
