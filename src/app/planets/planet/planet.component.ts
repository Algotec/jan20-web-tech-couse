import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {AU, IPlanetData} from '../common/common.types';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {
  @Input() planet: IPlanetData;
  @HostBinding('class.showBox') @Input() showBox: boolean = true;
  constructor() {
  }

  ngOnInit() {
  }

  getPlanetImage() {
    return '../../../assets/svgs/' + this.planet.name.toLowerCase() + '.svg';
  }

  getPlanetColor(distance: AU) {
    if (distance > 5) {
      return 'red';
    } else if (distance < 0.55) {
      return 'green';
    } else return 'yellow';

  }
}
