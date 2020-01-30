import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPlanetFormData, IPlanetSample, IPlanetTemplateFormData} from '../../common/common.types';
import {getLoad} from '../../common/planets.service';

function getEmptySample(): IPlanetSample {
  return {label: '', weight: null, cords: ""};
}

@Component({
  selector: 'app-planet-visit-form',
  templateUrl: './planet-visit-form.component.html',
  styleUrls: ['./planet-visit-form.component.scss']
})
export class PlanetVisitFormComponent implements OnInit {
  @Input() maxLoad: number;
  @Output() formSubmit = new EventEmitter<IPlanetFormData>();
  @Output() currentName = new EventEmitter<string>();
  formData: IPlanetFormData = {
    astronautName: '',
    date: new Date().toISOString().split('T')[0],
    samples: [getEmptySample()]
  };

  get currentLoad(): number {
    return getLoad(this.formData.samples, (sample) => sample.weight || 0);
  }


  constructor() {
  }

  ngOnInit() {
  }

  removeSample(index: number) {
    this.formData.samples.splice(index);
  }

  addSample() {
    this.formData.samples.push(getEmptySample());
  }

  onFormSubmitClick(planetTemplateFormData: IPlanetTemplateFormData) {
    this.formData.samples = this.formData.samples.map((sample, index) => {
      return {...sample, ...planetTemplateFormData.samples[index],}
    });
    this.formSubmit.emit(this.formData)
  }

  weigh(sample) {
    sample.weight = +((Math.random() * 100).toFixed(2));
  }

  recalculateLoad($event: any) {
    console.log($event);
  }
}
