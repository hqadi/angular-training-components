import { QuestionBase } from "./question-base"

export class TextBoxQuestion extends QuestionBase<string> {
    override controlType = 'text-box';
}