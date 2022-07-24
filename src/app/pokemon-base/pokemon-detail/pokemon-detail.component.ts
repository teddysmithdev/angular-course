import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  @Input()
  detail!: Pokemon;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  constructor() {
  }


  ngOnInit(): void {
  }

  onRemove() {
    this.remove.emit(this.detail);
  }

}
