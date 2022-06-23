import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Account, EditAccountBody } from '../models/account.model';
import { AccountService } from '../services/account.service';

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
    accounts: Account[] = [];
    counter = 0;

    constructor(private accountService: AccountService) { }

    ngOnInit(): void {
        console.log('inside ngOnInit()');
        this.data = { name: 'name', age: 50 };
        console.log('input: ', this.input);
        console.log('inside ngOnInit()');
        this.getAccounts();
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

    getAccounts(): void {
        this.accounts = this.accountService.getAccounts();
    }

    addAccount(): void {
        const accountToBeAdded: Account = {
            id: this.counter,
            clientName: `client name ${this.counter}`,
            description: `description ${this.counter}`,
            legalEntity: `legal entity ${this.counter}`,
        };
        this.counter++;
        const response = this.accountService.addAccount(accountToBeAdded);
        console.log(response);
    }

    editAccount(account: Account): void {
        const body: EditAccountBody = {
            clientName: `new name ${account.id}`,
            description: account.description,
            legalEntity: `new legal entity ${account.id}`,
        };
        const response = this.accountService.editAccount(account.id, body);
        console.log(response);
    }

    deleteAccount(id: number): void {
        const response = this.accountService.deleteAccount(id);
        console.log(response);
    }
}
