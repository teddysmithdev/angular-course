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

getPokemon(id: string) : Observable<Pokemon> {
  return this.http.get<Pokemon>(`${POKEMON_API}/${id}`);
}

getPokemons() : Observable<Pokemon[]> {
  return this.http.get<Pokemon[]>(POKEMON_API);
}

}
