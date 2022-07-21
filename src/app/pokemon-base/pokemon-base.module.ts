import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';



@NgModule({
  declarations: [
    PokemonListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokemonListComponent
  ]
})
export class PokemonBaseModule { }
