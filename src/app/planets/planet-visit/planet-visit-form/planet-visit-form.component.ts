import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IPlanetFormData, IPlanetSample, IPlanetTemplateFormData} from '../../common/common.types';

function getEmptySample(): IPlanetSample {
  return {label: '', weight: null, cords: ""};
}

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
    samples: [getEmptySample()]
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
    this.formData.samples.push(getEmptySample());
  }

  formSubmit(planetTemplateFormData: IPlanetTemplateFormData) {
    this.formData.samples = this.formData.samples.map((sample, index) => {
      return {...sample, ...planetTemplateFormData.samples[index],}
    });
    console.log(this.formData);
  }

  weigh(sample) {
    sample.weight = +((Math.random() * 100).toFixed(2));
  }
}
