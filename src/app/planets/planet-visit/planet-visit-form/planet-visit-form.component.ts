import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-planet-visit-form',
  templateUrl: './planet-visit-form.component.html',
  styleUrls: ['./planet-visit-form.component.scss']
})
export class PlanetVisitFormComponent implements OnInit {
  @Output() sign = new EventEmitter<string>();
  @Output() currentName = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onInput(name:string) {
    this.currentName.emit(name);
  }

  onEnter(name:string) {
    this.sign.emit(name);
  }
}
