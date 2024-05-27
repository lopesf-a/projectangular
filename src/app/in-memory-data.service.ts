import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Iron Man', power: 'Genius-level, intellect, high-tech armor', alterEgo: 'Tony Stark' },
      { id: 2, name: 'Captain America', power: 'Super-strength, shield', alterEgo: 'Steve Rogers' },
      { id: 3, name: 'Thor', power: 'God-like strength, Mjolnir', alterEgo: 'Thor Odinson' },
      { id: 4, name: 'Hulk', power: 'Super-strength', alterEgo: 'Bruce Banner' },
      { id: 5, name: 'Black Widow', power: 'Espionage and martial arts', alterEgo: 'Natasha Romanoff' },
      { id: 6, name: 'Hawkeye', power: 'Archery, marksmanship', alterEgo: 'Clint Barton' },
      { id: 7, name: 'Batman', power: 'Genius-level intellect, detective skills, high-tech gadgets', alterEgo: 'Bruce Wayne' },
      { id: 8, name: 'Superman', power: 'Super-strength, speed, flight, invulnerability, heat vision', alterEgo: 'Clark Kent' },
      { id: 9, name: 'Wonder Woman', power: 'Super-strength, speed, flight, indestructible bracelets', alterEgo: 'Diana Prince' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}