import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPlanetFormData, IPlanetSample} from '../../common/common.types';
import {getLoad} from '../../common/planets.service';
import {FormArray, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';

const sampleFormGroupValueGetter = (sample) => sample.get('weight').value || 0;

function maxWeightValidator(maxLoad: number): ValidatorFn {
  return (control: FormArray) => {
    const load = getLoad(control.controls, sampleFormGroupValueGetter);
    return (load > maxLoad) ? {maxWeight: 'overWeight!!'} : null;
  }
}


function createNewSampleGroup() {
  return new FormGroup({
    position: new FormControl('', {validators: [Validators.required, Validators.pattern(/\d+,\d+/)]}),
    sampleLabel: new FormControl('', {validators: [Validators.required, Validators.minLength(3)]}),
    weight: new FormControl('',)
  });
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
  formControls: FormGroup;
  samplesArray: FormArray;

  get currentLoad(): number {
    return getLoad(this.samplesArray.controls, (sample) => sample.value.weight || 0);
  }


  constructor() {
  }

  ngOnInit() {
    this.samplesArray = new FormArray(
      [createNewSampleGroup()], [maxWeightValidator(this.maxLoad)]
    );

    this.formControls = new FormGroup({
      astronautName: new FormControl(''),
      date: new FormControl(new Date()),
      samples: this.samplesArray
    });

  }

  removeSample(index: number) {
    this.samplesArray.removeAt(index);
  }

  addSample() {
    this.samplesArray.push(createNewSampleGroup());
  }

  onFormSubmitClick() {
    this.formSubmit.emit(this.formControls.value)
  }

  weigh(sample) {
    sample.controls.weight.patchValue(+((Math.random() * 100).toFixed(2)));
  }

}
