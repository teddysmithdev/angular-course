import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Pokemon {
  id: number,
  name: string,
  type: string,
  isCool: boolean,
  isStylish: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pokemons: Pokemon[] = [{
    id: 1,
    name: 'pikachu',
    type: 'electric',
    isCool: false,
    isStylish: true
  },{
    id: 1,
    name: 'squirtle',
    type: 'water',
    isCool: true,
    isStylish: true
  },{
    id: 1,
    name: 'charmander',
    type: 'fire',
    isCool: true,
    isStylish: false
  }]

  constructor() {

  }

}
