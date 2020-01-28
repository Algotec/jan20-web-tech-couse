import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IPlanetFormData} from '../../common/common.types';

@Component({
  selector: 'app-planet-visit-form',
  templateUrl: './planet-visit-form.component.html',
  styleUrls: ['./planet-visit-form.component.scss']
})
export class PlanetVisitFormComponent implements OnInit {
  @Output() sign = new EventEmitter<string>();
  @Output() currentName = new EventEmitter<string>();
  formData: IPlanetFormData = {
    astronautName: '',
    date: new Date().toISOString().split('T')[0],
    samples: []
  };


  constructor() {
  }

  ngOnInit() {
  }

  onInput(name: string) {
    this.currentName.emit(name);
  }

  onEnter(name: string) {
    this.sign.emit(name);
  }

  removeSample(index: number) {
    this.formData.samples.splice(index);
  }

  addSample() {
    this.formData.samples.push({label: '', weight: null, cords: ""});
  }

  formSubmit($event: any) {
    console.log($event);
  }

  weigh(sample) {
    const weight = (Math.random() * 100).toFixed(2);
    sample.weight = weight;
  }
}
