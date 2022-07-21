import { Component, OnInit } from '@angular/core';
//Decorator
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemon: string;
  constructor() { 
    this.pokemon = "";
  }

  ngOnInit(): void {
    console.log("ngOnitFired");
    this.pokemon = "";
  }

  

}



