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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightTextDirective } from '../_directives/highlight-text.directive';
import { CustomifDirective } from '../_directives/customif.directive';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: PokemonListComponent },
      { path: 'form', component: ReactiveFormsComponent },
      { path: ':id', component: PokemonFormsComponent }
    ]
  }
];


@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonFormsComponent,
    ReactiveFormsComponent,
    HighlightTextDirective,
    CustomifDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonFormsComponent,
    ReactiveFormsComponent,
    RouterModule
  ],
  providers: [
    PokemonService
  ],
  bootstrap: [HighlightTextDirective, CustomifDirective]
})
export class PokemonBaseModule { }
