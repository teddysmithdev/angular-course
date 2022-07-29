import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../_services/pokemon.service';

@Component({
  selector: 'app-pokemon-forms',
  templateUrl: './pokemon-forms.component.html',
  styleUrls: ['./pokemon-forms.component.css']
})
export class PokemonFormsComponent implements OnInit {
  pokemon!: Pokemon;
  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getPokemon(1).subscribe((data: Pokemon) => {
        this.pokemon = data;
    });
  }

}
