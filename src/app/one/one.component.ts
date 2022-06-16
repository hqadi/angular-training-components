import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-one',
    templateUrl: './one.component.html',
    styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
    receivedData = '';

    constructor() { }

    ngOnInit(): void {
    }

    dataReceived(data: string): void {
        console.log('data received in one');
        this.receivedData = data;
    }
}
