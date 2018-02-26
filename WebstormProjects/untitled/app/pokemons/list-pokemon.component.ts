import {Component, OnInit} from '@angular/core';
import {Pokemon} from "./Pokemon";
import {POKEMONS} from "./mock-pokemons";
import {Router} from "@angular/router";

@Component({
    selector: 'list-pokemon',
    template:
        `<h1 class='center'>Pokémons</h1>
    <div class='container'>
        <div class="row">
            <div *ngFor='let pokemon of pokemons' class="col s6 m4">
                <div class="card horizontal" (click)="selectPokemon(pokemon)" pkmn-shadow-card>
                    <div class="card-image">
                        <img [src]="pokemon.picture">
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                            <p>{{ pokemon.name }}</p>
                            <p><small>{{ pokemon.created }}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
})
export class ListPokemonComponent implements OnInit {

    // 1. La propriété 'pokemons' est un tableau d'objet de type 'Pokemon'.
    private pokemons: Pokemon[]= null;

    constructor(private router: Router) {}


    // 2. Initialisation de la propriété 'pokemons'.
    ngOnInit() {
        this.pokemons = POKEMONS;
    }

    selectPokemon(pokemon: Pokemon): void {
        console.log('Vous avez selectionné ' + pokemon.name);
        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }

}