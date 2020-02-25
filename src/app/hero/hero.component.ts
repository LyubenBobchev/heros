import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Hero } from '../hero';
import { HeroService} from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroService.getHeroes().subscribe(h => this.heroes = h);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
    console.log(`added hero id=${hero.id}`);
    console.log(this.messageService.messages);
  }
}
