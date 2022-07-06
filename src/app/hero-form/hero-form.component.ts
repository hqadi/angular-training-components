import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero.model';

@Component({
    selector: 'app-hero-form',
    templateUrl: './hero-form.component.html',
    styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
    powers: string[] = ['Really Smart', 'Super Flexible', 'Weather Changer'];
    model: Hero = { name: '', power: '', alterEgo: '' };
    constructor() { }

    ngOnInit(): void {
    }

    onSubmit(): void {
        console.log(this.model);
    }
}
