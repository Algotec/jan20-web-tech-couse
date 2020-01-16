import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-planets-view',
  templateUrl: './planets-view.component.html',
  styleUrls: ['./planets-view.component.scss']
})
export class PlanetsViewComponent implements OnInit {
  planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

  constructor() {
  }

  plantClicked(planet: string) {
    console.log(planet, 'clicked');
  }

  ngOnInit() {
  }

}
