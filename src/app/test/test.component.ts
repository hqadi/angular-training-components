import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: ['.text-blue { color: green }']
})
export class TestComponent implements OnInit {
  @Input() title!: string;
  @Input() object: any;
  @Input('name') masterName = 'some name';
  @Output() titleUpdated = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  updateTitle(): void {
    this.title = 'new name';
    this.titleUpdated.emit(this.title);
  }

}
