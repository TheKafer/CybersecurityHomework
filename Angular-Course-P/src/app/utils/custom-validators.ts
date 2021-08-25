import { AbstractControl } from '@angular/forms';

export class CustomValidators {
  static isPriceValid(control: AbstractControl) {
    const value = control.value;

    if (value > 1000000) {
      return { price_invalid: true };
    }
    if (value < 0) {
      return { price_invalid: true };
    }
    return null;
  }
}
