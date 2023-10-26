import { defineStore } from 'pinia';

export const pokemonStore = defineStore('pokemonStore', {
  state: () => ({
    pokemon: {},
    pokemonsTypes: [],
    pokemonsList: [],
  }),
  actions: {
    setPokemon(newPokemon) {
      this.pokemon = newPokemon;
    },
    setPokemonsTypes(newPokemonsTypes) {
      this.pokemonsTypes = newPokemonsTypes;
    },
    setPokemonsList(newPokemonsList) {
      this.pokemonsList = newPokemonsList;
    },
    async fetchPokemon(pokemonName) {
      this.pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json())
      .then(pokemon => pokemon);
    },
    async fetchPokemonsTypes() {
      const pokemonTypes = await fetch('https://pokeapi.co/api/v2/type')
        .then((response) => response.json())
        .then(types => types);
      this.pokemonsTypes = pokemonTypes.results.map((type) => ({
        name: type.name,
      }));
    },
    async fetchPokemonListByType(selectedType) {
      const pokemonsList = await fetch(`https://pokeapi.co/api/v2/type/${selectedType}`)
      .then((response) => response.json())
      .then(pokemons => pokemons);
      this.pokemonsList = pokemonsList.pokemon.map((pokemon) => ({
        name: pokemon.pokemon.name,
      }));
    },
  },
});
