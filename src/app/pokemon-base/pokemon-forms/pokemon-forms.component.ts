import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Pokemon, PokemonType } from '../../models/pokemon';
import { PokemonService } from '../../_services/pokemon.service';

@Component({
  selector: 'app-pokemon-forms',
  templateUrl: './pokemon-forms.component.html',
  styleUrls: ['./pokemon-forms.component.css']
})
export class PokemonFormsComponent implements OnInit {
  pokemon!: Pokemon;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pokemonService: PokemonService) { }

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

  handleSubmit(object: any) {
    console.log(object);
  }

  ngOnInit() {
    this.pokemon = {} as Pokemon;
    this.route.params.subscribe((data: Params) => {
        return this.pokemonService.getPokemon(data['id']).subscribe((data: Pokemon) => {
          this.pokemon = data;
      });
    })
  }

  back() : void {
    this.router.navigate(['/pokemon'])
  }
}
