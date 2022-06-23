import { Injectable } from '@angular/core';
import { Account, EditAccountBody } from '../models/account.model';
import { TestService } from './test.service';

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    accounts: Account[] = [];

    constructor(private testService: TestService) { }

    getAccounts(): Account[] {
        return this.accounts;
    }

    addAccount(accountToAdd: Account): string {
        const account = this.accounts.find(acc => acc.id === accountToAdd.id);
        if (account) {
            return 'Account already exists';
        }
        this.accounts.push(accountToAdd);
        this.testService.log('Account added successfully');
        return 'Account added successfully';
    }

    editAccount(id: number, body: EditAccountBody): string {
        const index = this.accounts.findIndex(account => account.id === id);
        if (index > -1) {
            // accountToEdit.clientName = body.clientName;
            // accountToEdit.description = body.description;
            // accountToEdit.legalEntity = body.legalEntity;
            this.accounts[index] = {
                id: this.accounts[index].id,
                ...body,
            }
            return 'Account Updated Successfully';
        }
        return 'Not found'
    }

    deleteAccount(id: number): string {
        const index = this.accounts.findIndex(account => account.id === id);
        if (index > -1) {
            this.accounts.splice(index, 1);
            return 'Account Deleted Successfully';
        }
        return "Account Doesn't Exist";
    }
}
