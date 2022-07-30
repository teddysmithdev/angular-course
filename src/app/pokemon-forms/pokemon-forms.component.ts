import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonType } from '../models/pokemon';
import { PokemonService } from '../_services/pokemon.service';

@Component({
  selector: 'app-pokemon-forms',
  templateUrl: './pokemon-forms.component.html',
  styleUrls: ['./pokemon-forms.component.css']
})
export class PokemonFormsComponent implements OnInit {
  pokemon!: Pokemon;
  constructor(private pokemonService: PokemonService) { }

  pokemonType: PokemonType[] =[
    {
      key: 0,
      value: 'Fire'
    },
    {
      key: 1,
      value: 'Water'
    }
]

  toggleIsCool(event: any) {
    console.log(event);
  }

  log(object: any){
    console.log(object);
  }

  ngOnInit() {
    this.pokemon = {} as Pokemon;
    this.pokemonService.getPokemon(1).subscribe((data: Pokemon) => {
        this.pokemon = data;
    });
  }

}
