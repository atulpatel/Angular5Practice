import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})

export class HerosComponent implements OnInit {
  heros: Hero[];
  addedHero: Hero = { id: 0, name: ''};
  // addedHero: Hero = { id: 55, name: 'Test Add'};
  constructor(private heroService: HeroService) {  }

  addHero(hero: Hero): void {
    this.heroService.addHero(hero);
  }
  getHeros(): void {
    this.heroService.getHeros()
      .subscribe(heros => this.heros = heros);
  }

  ngOnInit() {
    this.getHeros();
  }

}
