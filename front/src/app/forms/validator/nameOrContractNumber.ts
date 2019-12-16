import { AbstractControl } from '@angular/forms';

/**
 * Exemple of custom validator
 * @param this.(form's input)
 */
export function nameOrContractNumber(control: AbstractControl): { [key: string]: boolean } | null  {
  if (control.value === '') {
      console.log('null');
      return { formErrorNoN: true};
  } else {
    console.log('not null');
    return null;
  }
}
