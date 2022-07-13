import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Client } from 'src/models';
import { UsersService } from './services/users.service';
import { DropdownQuestion } from './shared/questions/dropdown';
import { QuestionBase } from './shared/questions/question-base';
import { QuestionControlService } from './shared/questions/question-control.service';
import { QuestionService } from './shared/questions/question.service';
import { TextBoxQuestion } from './shared/questions/text-box';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'test';
    url = window.location.href;
    myWindow = window;
    count = 5;
    result = 7 | 5;
    arr = new Array(1, 2, 3);
    cols = 2;
    inputId = 'hala';
    btnDisabled = false;
    isBlue = true;
    classes = 'border border-danger m-5 text-secondary';
    isSuccess = true;
    isBold = false;
    classObj = {
        'text-success': this.isSuccess,
        'text-danger': !this.isSuccess,
        'fw-bold': this.isBold
    };
    classesArray = [
        this.isBlue ? 'fw-bold' : ''
    ];
    backgroundColor = 'red';
    navStyle = 'font-size: 1.2rem; color: red';
    linkStyle = 'underline';
    activeLinkStyle = 'overline';
    name = 'hala';
    showTestComponent = true;
    currentDate = new Date();
    showDiv = true;
    customer: any;
    items: string[] = ['name 1', 'name 2', 'name 3', 'name 4', 'name 5'];
    color = '';
    client: Client = {
        id: 1,
        initials: 'ABC',
        description: 'whatever',
        sector: 'Government',
        status: 2,
    };
    nameControl = new FormControl('test');
    questions: QuestionBase<any>[] = [];

    constructor(
        private usersService: UsersService, 
        private qcs: QuestionControlService,
        private questionService: QuestionService,
    ) {}

    ngOnInit(): void {
        this.getUsers();
        this.nameControl.valueChanges.subscribe(value => {
            console.log('Inside valueChanges subscription:', value);
        });
        this.questions = this.questionService.getQuestions();
    }

    getUsers() {
        this.usersService.getUsers().subscribe(response => {
            console.log(response);
            // const keys = response.headers.keys();
            // keys.forEach(key => console.log(`${key}: ${response.headers.get(key)}`));
        });
    }

    createUser(): void {
        this.usersService.createUser({ firstName: 'test', lastName: 'test', email: 'test222@test.com'})
        .subscribe(
            response => console.log(response),
            (err) => console.log('Error Occurred (subscribe):', err),
        );
    }

    greetUser(): string {
        console.log('inside greetUser');
        return 'welcome to Angular training';
    }

    onButtonClick(value: any): void {
        console.log(value);
    }

    onTitleUpdate(title: string): void {
        console.log('title updated', title);
    }

    changeName(): void {
        this.name = 'new name';
    }

    toggleTestComponentView() {
        this.showTestComponent = !this.showTestComponent;
    }

    updateNameControl(): void{
        this.nameControl.setValue('updated value');
    }
}
