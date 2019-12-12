import { AbstractControl } from '@angular/forms';

/**
 * Doc : https://medium.com/simars/custom-transitive-validators-in-reactive-forms-anguar-4201d4b8e3f6
 */
export class RequiredEitherInput {
  static requiredWhen(requiredControlName, controlToCheckName) {
    return (control: AbstractControl) => {
      const required = control.get(requiredControlName);
      const toCheck = control.get(controlToCheckName);
      if (required.value || !toCheck.value) {
        removeErrors(['required'], required);
        return null;
      }
      const errorValue = `${requiredControlName}_Required_When_${controlToCheckName}`;
      setErrors({required: errorValue}, required);
      return {[errorValue]: true};
    };
  }

  static requiredEither(requiredControlName, controlToCheckName) {
    return (control) => {
      const required = control.get(requiredControlName);
      const toCheck = control.get(controlToCheckName);
      if (required.value || toCheck.value) {
        removeErrors(['required'], required);
        removeErrors(['required'], toCheck);
        return null;
      }
      const errorValue = `${requiredControlName}_Required_Either_${controlToCheckName}`;
      setErrors({required: errorValue}, required);
      setErrors({required: errorValue}, toCheck);
      return {[errorValue]: true};
    };
  }


  static requiredWhenNot(requiredControlName, controlToCheckName) {
    return (control) => {
      const required = control.get(requiredControlName);
      const toCheck = control.get(controlToCheckName);
      if (required.value || toCheck.value) {
        removeErrors(['required'], required);
        return null;
      }
      const errorValue = `${requiredControlName}_Required_When_Not_${controlToCheckName}`;
      setErrors({required: errorValue}, required);
      return  {[errorValue]: true};
    };
  }

}

function setErrors(error: {[key: string]: any }, control: AbstractControl) {
  control.setErrors({...control.errors, ...error});
}

function  removeErrors(keys: string[], control: AbstractControl) {
  const remainingErrors = keys.reduce((errors, key) => {
    delete  errors[key];
    return errors;
  }, {...control.errors});
  control.setErrors(Object.keys(remainingErrors).length > 0 ? remainingErrors : null);
}
