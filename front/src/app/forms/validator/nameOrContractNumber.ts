import { AbstractControl } from '@angular/forms';

export function nameOrContractNumber(control: AbstractControl): { [key: string]: boolean } | null  {
  // if (control.value !== undefined && (isNaN(control.value) || control.value < 18 || control.value > 45)) {
  if (control.value === '') {
      console.log('null');
      return { formErrorNoN: true};
  } else {
    console.log('not null');
    return null;
  }
}
