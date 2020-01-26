import {Component, Input, OnInit} from '@angular/core';
import {ISpaceship} from '@algotec/spaceship-parts';

@Component({
  selector: 'app-spaceship-icon',
  template: `
    <img class="spaceship-image" src="/assets/images/{{ship.name|lowercase}}.png"/>
  `,
  styles: [
      `img {
      max-height: 80px;
    }`
  ]
})
export class SpaceshipIconComponent implements OnInit {
  @Input() ship: ISpaceship;

  constructor() {
  }

  ngOnInit() {
  }

}
