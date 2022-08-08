import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//Components
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

//Services
import { PokemonService } from '../_services/pokemon.service';
import { RouterModule, Routes } from '@angular/router';
import { PokemonFormsComponent } from './pokemon-forms/pokemon-forms.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: PokemonListComponent},
      { path: ':id', component: PokemonFormsComponent}
    ]
  }
];


@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonFormsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonFormsComponent,
    RouterModule
  ],
  providers: [
    PokemonService
  ]
})
export class PokemonBaseModule { }
