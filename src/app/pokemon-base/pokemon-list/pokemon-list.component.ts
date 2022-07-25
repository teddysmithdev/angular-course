import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/_services/pokemon.service';
//Decorator
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  constructor(private pokemonService : PokemonService) { 
    
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



