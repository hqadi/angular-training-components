import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TestService {
    constructor() { }

    log(message: string): void {
        console.log(message, 'from TestService');
    }
}
