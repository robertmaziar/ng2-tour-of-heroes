import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './app/dashboard.component.html',
    styleUrls: ['./app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];

    constructor(private heroService: HeroService) {}

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.heroService.getHeroes()
        .then(heroes => this.heroes = heroes.slice(1, 5));
    }
}

// logic happening here is also used in the HeroesComponent

//Define a 'heroes' array property
//inject the HeroService in the constructor and hold it in a private 'heroService' field.
//Call the service to get heroes inside the Angular 'ngOnInit()' lifecycle hook.