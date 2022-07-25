import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//Components
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

//Services
import { PokemonService } from '../_services/pokemon.service';



@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    PokemonListComponent,
    PokemonDetailComponent
  ],
  providers: [
    PokemonService
  ]
})
export class PokemonBaseModule { }
