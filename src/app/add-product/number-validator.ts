import { AbstractControl } from "@angular/forms";

const digit = /^[0-9]*[.]*[0-9]*$/;

export function numberValidator(control: AbstractControl): { [key: string]: boolean } | null {

  if (control.value !== undefined && !digit.test(control.value)) {
      return { 'isNotNumeric': true };
  }
  return null;
}
