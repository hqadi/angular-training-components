import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../question-base';
import { QuestionControlService } from '../question-control.service';

@Component({
    selector: 'app-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
    @Input() questions: QuestionBase<any>[] = [];
    form!:FormGroup;
    payload = '';

    constructor(private qcs: QuestionControlService) { }

    ngOnInit(): void {
        this.form = this.qcs.toFormGroup(this.questions);
    }

    onSubmit(): void {
        this.payload = JSON.stringify(this.form.value);
    }
}
