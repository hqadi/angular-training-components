import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-five',
    templateUrl: './five.component.html',
    styleUrls: ['./five.component.css']
})
export class FiveComponent implements OnInit {
    @Input() inputData = '';
    constructor() { }

    ngOnInit(): void {
    }
}
