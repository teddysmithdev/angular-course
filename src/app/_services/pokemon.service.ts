import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';


import { Pokemon } from '../models/pokemon';

const POKEMON_API = 'http://localhost:3000/pokemon'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

constructor(private http: HttpClient) {
    console.log(this.http);
 }

getPokemon(id: number) : Observable<Pokemon> {
  return this.http.get<Pokemon>(`${POKEMON_API}/1`);
}

getPokemons() : Observable<Pokemon[]> {
  return this.http.get<Pokemon[]>(POKEMON_API);
}

}
