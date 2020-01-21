import {Component, Input, OnInit} from '@angular/core';
import {ISpaceship} from '@algotec/spaceship-parts';

@Component({
  selector: 'app-my-ships',
  templateUrl: './my-ships.component.html',
  styleUrls: ['./my-ships.component.scss']
})
export class MyShipsComponent implements OnInit {
  @Input() ships:  ISpaceship[];

  constructor() {
  }

  ngOnInit() {
  }


}
