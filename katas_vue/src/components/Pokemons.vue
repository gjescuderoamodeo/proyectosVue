<template>
  <div>
    <button type="button" @click="setheightByPokemonId(25)">heightByPokemonId</button>
    Altura es {{ heightByPokemonId }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      heightByPokemonId: 0,
      pokemonsByType: '',
      pokemonSpeciesName: '',
      heightsByType: '',
    }
  },
  methods: {
    async setheightByPokemonId(pokemonId) {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      await fetch(url)
        .then(response => response.json())
        .then(pokemon => {
          this.heightByPokemonId = pokemon.height;
        });
    }
  },

}
</script>

<style lang="">
  
</style>