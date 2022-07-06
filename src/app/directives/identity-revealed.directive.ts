import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { identityRevealedValidator } from '../hero-form/my-custom-validators';

@Directive({
    selector: '[appIdentityRevealed]',
    providers: [{ provide: NG_VALIDATORS, useExisting: IdentityRevealedDirective, multi: true }],
})
export class IdentityRevealedDirective implements Validator {
    constructor() { }

    validate(control: AbstractControl): ValidationErrors | null {
        return identityRevealedValidator(control);
    }
}
