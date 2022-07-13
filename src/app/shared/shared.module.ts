import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { DynamicFormQuestionComponent } from './questions/dynamic-form-question/dynamic-form-question.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './questions/dynamic-form/dynamic-form.component';



@NgModule({
    declarations: [
        HeaderComponent,
        DynamicFormQuestionComponent,
        DynamicFormComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    exports: [HeaderComponent, ReactiveFormsModule, DynamicFormQuestionComponent, DynamicFormComponent],
})
export class SharedModule { }
