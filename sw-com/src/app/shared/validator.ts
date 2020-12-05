import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(control: AbstractControl) : ValidationErrors | null {
    const value = (control.value as string);

    if(!value) {
        return null;
    }

    const isValidEmail = /^[\w-\.]+@[\w-\.]+\.[\w-]{2,4}$/.test(value);
    return isValidEmail ? null : { emailValidator: true };
}

export function imageUrlValidator(control: AbstractControl) : ValidationErrors | null {
    const value = (control.value as string);

    if(!value) {
        return null;
    }

    const isValidImageUrl = /^https?:\/\/.*\.(?:png|jpg)$/.test(value);
    return isValidImageUrl ? null : { imageUrlValidator: true };
}