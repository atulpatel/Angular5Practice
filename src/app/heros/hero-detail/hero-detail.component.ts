import {Component, OnInit, Input} from '@angular/core';
import { Hero } from '../../hero';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../../hero.service';

@Component({
    selector : 'app-heros-detail',
    templateUrl : './hero-detail.component.html',
    styleUrls : ['./hero-detail.component.css']
})
export class HeroDetailsComponent implements OnInit {

    hero:  Hero;
    constructor(private route: ActivatedRoute
        , private heroService: HeroService
        , private location: Location ) {

    }
    getHero(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.heroService.getHero(id).subscribe(hero => this.hero = hero);
    }
    ngOnInit(): void {
        this.getHero();
    }

    goBack(): void {
        this.location.back();
      }
}
