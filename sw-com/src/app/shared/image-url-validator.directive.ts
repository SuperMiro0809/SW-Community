import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { imageUrlValidator } from './validator';

@Directive({
  selector: '[ngModel][appImageUrlValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: ImageUrlValidatorDirective
    }
  ]
})
export class ImageUrlValidatorDirective implements Validator {

  constructor() { }


  validate(control: AbstractControl): ValidationErrors {
    return imageUrlValidator(control);
  }

}
