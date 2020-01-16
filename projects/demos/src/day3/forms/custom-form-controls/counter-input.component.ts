import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';


export function createCounterRangeValidator(maxValue, minValue) {
  return (c: FormControl) => {
    let err = {
      rangeError: {
        given: c.value,
        max: maxValue || 10,
        min: minValue || 0
      }
    };

  return (c.value > +maxValue || c.value < +minValue) ? err: null;
  }
}

@Component({
  selector: 'counter-input',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CounterInputComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => CounterInputComponent), multi: true }
  ],
  template: `
    <button (click)="increase()">+</button> {{counterValue}} <button (click)="decrease()">-</button>
  `,
})
export class CounterInputComponent implements ControlValueAccessor {

  counterValue = 0;
  propagateChange:any = (...args) => {};
  validateFn:any = (...args) => {};

  @Input() counterRangeMax;
  @Input() counterRangeMin;

  ngOnInit() {
    this.validateFn = createCounterRangeValidator(this.counterRangeMax, this.counterRangeMin);
  }

  writeValue(value) {
    if (value) {
      this.counterValue = value;
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  increase() {
    this.counterValue++;
    this.propagateChange(this.counterValue);
  }

  decrease() {
    this.counterValue--;
    this.propagateChange(this.counterValue);
  }

  validate(c: FormControl) {
    return this.validateFn(c);
  }
}
