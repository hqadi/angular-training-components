import { Injectable } from '@angular/core';
import { DropdownQuestion } from './dropdown';
import { QuestionBase } from './question-base';
import { TextBoxQuestion } from './text-box';

@Injectable({
    providedIn: 'root'
})
export class QuestionService {
    constructor() { }

    getQuestions(): QuestionBase<any>[] {
        const questions = [
            new TextBoxQuestion({
                key: 'name',
                value: '4',
                label: 'Enter Name',
                required: true,
                type: 'number',
                order: 2,
            }),
            new DropdownQuestion({
                key: 'dropdown',
                label: 'Select Value',
                required: true,
                value: '2',
                options: [
                    { key: '1', value: 'Option 1' },
                    { key: '2', value: 'Option 2' },
                    { key: '3', value: 'Option 3' },
                ],
            })
        ];
        return questions.sort((a, b) => a.order - b.order);
    }
}
