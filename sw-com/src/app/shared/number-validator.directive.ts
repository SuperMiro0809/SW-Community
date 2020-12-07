import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { positiveNumberValidator } from './validator';

@Directive({
  selector: '[ngModel][appNumberValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: NumberValidatorDirective
    }
  ]
})
export class NumberValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    return positiveNumberValidator(control);
  }

}
