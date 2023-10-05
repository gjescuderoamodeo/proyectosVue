<template>
  <div>
    <button type="button" @click="setHeightByPokemonId(25)">heightByPokemonId</button>
    Altura es {{ heightByPokemonId }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      heightByPokemonId: 0,
      pokemonsByType: [],
      heightsByType: [],
      pokemonSpeciesName: [],
    }
  },
  methods: {
    async setHeightByPokemonId(pokemonId) {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      await fetch(url)
        .then(response => response.json())
        .then(pokemon => {
          this.heightByPokemonId = pokemon.height;
        });
    },
    //pokemons por tipo
    async setPokemonsByType(type) {
      const url = `https://pokeapi.co/api/v2/type/${type}`
      await fetch(url)
        .then(response => response.json())
        .then(pokemon => {
          this.pokemonsByType = pokemon;
        }).catch(() => {
          this.pokemonsByType = [];
        });
    },
    //pokemons por tipo
    async setPokemonSpeciesNameByGeneration(generation) {
      //let names = [];

      const url = `https://pokeapi.co/api/v2/generation/${generation}`
      await fetch(url)
        .then(response => response.json())
        .then(pokemons => {
          pokemons.pokemon_species.forEach(pokemon => {
            this.pokemonSpeciesName.push(pokemon.name)
          });
        });
      this.pokemonSpeciesName.sort();
    },

    //Método que actualiza  el listado de altura de los pokemons según su tipo
    async setHeightsByType(type) {
      let pokemonFetch = [];

      const url = `https://pokeapi.co/api/v2/type/${type}`
      await fetch(url)
        .then(response => response.json())
        .then(pokemons => {
          pokemons.pokemon.forEach(pokemon => {
            //lamada
            pokemonFetch.push(
              fetch(pokemon.pokemon.url)
                .then(response => response.json())
                .then(pokemon => {
                  //heightsByType.push(pokemon.height);
                  return pokemon;
                }))
          })
          return Promise.all(pokemonFetch);
          /*const pokemons2 = await Promise.all(pokemonFetch);
          pokemons2.forEach(pokemon => {
            this.heightsByType.push(pokemon.height);
          })*/
        }
        )
        .then(pokemons => {
          pokemons.forEach(pokemon => {
            this.heightsByType.push(pokemon.height);
          })
        })
    }
  },

}
</script>

<style lang="">
  
</style>