import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionBase } from './question-base';

@Injectable({
    providedIn: 'root'
})
export class QuestionControlService {
    constructor() { }

    toFormGroup(questions: QuestionBase<any>[]): FormGroup {
        const group: any = {};
        questions.forEach(question => {
            group[question.key] = question.required ? new FormControl(question.value, Validators.required) :
            new FormControl(question.value);
        });
        return new FormGroup(group);
    }

    generateFormControl(question: QuestionBase<any>): FormControl {
        // You need to add validation
        return new FormControl(question.value);
    }
}
