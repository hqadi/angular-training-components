import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-three',
    templateUrl: './three.component.html',
    styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
    @Output() sendData = new EventEmitter<any>();
    constructor() { }

    ngOnInit(): void {
    }

    dataReceived(data: string): void {
        console.log('emitted from three');
        this.sendData.emit(data);
    }
}
