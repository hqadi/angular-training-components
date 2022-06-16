import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-two',
    templateUrl: './two.component.html',
    styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
    @Input() inputData = '';

    constructor() { }

    ngOnInit(): void {
        this.someFunction('data');
        this.someFunction();
    }

    someFunction(parameter?: string): void {
        console.log(parameter);
    }

}
