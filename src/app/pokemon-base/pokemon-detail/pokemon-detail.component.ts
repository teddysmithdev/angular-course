import { AfterContentInit, Component, ContentChild, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit, AfterContentInit {
  @ContentChildren("contentRef") contentList!: any;
  @Input()
  detail!: Pokemon;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  constructor() {
  }
  ngAfterContentInit(): void {
    console.log(this.contentList);
  }

  ngOnInit(): void {
  }

  onRemove() {
    this.remove.emit(this.detail);
  }

}
