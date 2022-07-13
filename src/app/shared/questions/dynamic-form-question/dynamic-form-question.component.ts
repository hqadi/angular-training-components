import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../question-base';

@Component({
    selector: 'app-dynamic-form-question',
    templateUrl: './dynamic-form-question.component.html',
    styleUrls: ['./dynamic-form-question.component.css']
})
export class DynamicFormQuestionComponent implements OnInit {
    @Input() question!: QuestionBase<any>;
    @Input() form!: FormGroup;

    constructor() { }

    ngOnInit(): void {
    }

    get control() {
        return this.form.controls[this.question.key];
    }
}
