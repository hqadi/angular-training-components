import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { bobValidator, forbiddenNameValidator } from '../hero-form/my-custom-validators';

@Directive({
    selector: '[appForbiddenValidator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true }],
})
export class ForbiddenValidatorDirective implements Validator {
    @Input('appForbiddenValidator') forbiddenName = '';

    constructor() { }

    validate(control: AbstractControl): ValidationErrors | null {
        // return bobValidator(control);
        if (!this.forbiddenName) {
            return null;
        }
        const validatorFn = forbiddenNameValidator(this.forbiddenName);
        return validatorFn(control);
    }
}
