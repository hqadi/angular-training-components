import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styles: ['.text-blue { color: green }']
})
export class TestComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
    @Input() title!: string;
    @Input() object!: { age: number };
    @Input('name') masterName = 'some name';
    @Output() titleUpdated = new EventEmitter<any>();
    @ViewChild('input') input!: ElementRef;
    data = {};

    constructor() { }

    ngOnInit(): void {
        console.log('inside ngOnInit()');
        this.data = { name: 'name', age: 50 };
        console.log('input: ', this.input);
        console.log('inside ngOnInit()');
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('inside ngOnChanges()');
        if (changes.title) {
            console.log(changes.title);
            console.log(changes.title.currentValue);
            console.log(this.title);
        }
        console.log('inside ngOnChanges()');
    }

    ngAfterViewInit(): void {
        console.log('inside ngAfterViewInit()');
        console.log('input: ', this.input);
        console.log('inside ngAfterViewInit()');
    }

    ngOnDestroy(): void {
        console.log('Component Destroyed')
    }


    updateTitle(): void {
        this.title = 'new name';
        this.titleUpdated.emit(this.title);
    }

}
