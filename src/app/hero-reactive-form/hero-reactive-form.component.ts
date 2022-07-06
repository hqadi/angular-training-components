import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator, identityRevealedValidator } from '../hero-form/my-custom-validators';

@Component({
    selector: 'app-hero-reactive-form',
    templateUrl: './hero-reactive-form.component.html',
    styleUrls: ['./hero-reactive-form.component.css']
})
export class HeroReactiveFormComponent implements OnInit {
    powers: string[] = ['Really Smart', 'Super Flexible', 'Weather Changer'];
    heroForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(4), forbiddenNameValidator('alice')]),
        alterEgo: new FormControl(),
        power: new FormControl('', Validators.required),
    }, { validators: identityRevealedValidator });

    constructor() { }

    ngOnInit(): void {
    }

    onSubmit(): void {
        console.log(this.heroForm.value);
    }

    get name() {
        return this.heroForm.controls.name;
    }

    get power() {
        return this.heroForm.controls.power;
    }
}
