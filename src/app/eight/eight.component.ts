import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-eight',
    templateUrl: './eight.component.html',
    styleUrls: ['./eight.component.css']
})
export class EightComponent implements OnInit {
    @Output() sendData = new EventEmitter<any>();

    constructor() { }

    ngOnInit(): void {
    }

    onSendDataClick(): void {
        console.log('emitted from eight');
        this.sendData.emit('Angular');
    }
}
