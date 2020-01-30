import {Directive, Input} from '@angular/core';
import {FormGroup, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {getLoad} from '../../common/planets.service';

@Directive({
  selector: '[samplesWeight]',
  providers: [{provide: NG_VALIDATORS, useExisting: SamplesWeightValidatorDirective, multi: true}]
})
export class SamplesWeightValidatorDirective implements Validator {
  @Input('samplesWeight') maxLoad: number;

  constructor() {
  }

  validate(control: FormGroup): ValidationErrors | null {
    const weight = getLoad(Object.values(control.controls), (control) => control.value.weight);
    return (!isNaN(weight) && weight > this.maxLoad) ? {samplesWeight: 'samples weight is too large'} : null;
  }

}
