import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonBaseModule } from './pokemon-base/pokemon-base.module';
import { PokemonFormsComponent } from './pokemon-forms/pokemon-forms.component';

@NgModule({
  declarations: [	
    AppComponent,
    PokemonFormsComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    PokemonBaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
