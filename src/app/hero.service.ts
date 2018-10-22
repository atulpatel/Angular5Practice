import { Injectable } from '@angular/core';
import { Observable, of, fromEventPattern } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './heros/mock-heroes';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})

export class HeroService {
    getHero(id: number): Observable<Hero> {
        this.messageService.add(`HeroService: fetched hero id=${id}`);
        return of(HEROES.find(hero => hero.id === id));
    }
    addHero(hero: Hero): void {
    this.messageService.add('HeroService: hero added' );
    HEROES.push(hero);
  }

  constructor(private messageService: MessageService) { }

  getHeros(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heros' );
    return of(HEROES);
  }
}
