import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemons/Pokemon';
import { POKEMONS } from './pokemons/mock-pokemons';

@Component({
    selector: 'pokemon-app',
    template: '<h1>Pokémons</h1>'
})
export class AppComponent2 implements OnInit {

    pokemons: Pokemon[] = null;

    ngOnInit() {
        this.pokemons = POKEMONS;
    }

    selectPokemon(pokemon: Pokemon) {
        console.log('Vous avez selectionné ' + pokemon.name);
    }

}