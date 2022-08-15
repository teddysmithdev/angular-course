import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/_services/pokemon.service';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';
//Decorator
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit, AfterViewInit, AfterContentInit {
  pokemons: Pokemon[] = [];
  

  constructor(private pokemonService : PokemonService, private renderer: Renderer2) { 

    
  }
  ngAfterContentInit(): void {

  }
  ngAfterViewInit(): void {

  }

  handleRemove(event: Pokemon) {
    this.pokemons = this.pokemons.filter((pokemon : Pokemon) => {
      return pokemon.id !== event.id;
    })
  }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((data: Pokemon[]) => {
      console.log(data);
      this.pokemons = data; 
    });
  }

  

}



