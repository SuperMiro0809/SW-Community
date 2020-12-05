import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { emailValidator } from './validator';

@Directive({
  selector: '[ngModel][appEmailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: EmailValidatorDirective
    }
  ]
})
export class EmailValidatorDirective implements Validator {

  constructor() { }


  validate(control: AbstractControl): ValidationErrors {
    return emailValidator(control);
  }

}
