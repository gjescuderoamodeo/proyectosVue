<template>
  <div v-if="pokemonList.length > 0">
    <span>{{ $t('pokemons_list')}}: </span>
    <select
      v-model="selectedPokemon"
      @change="changePokemon">
      <option v-for="pokemon in pokemonList" :key="pokemon.name" :value="pokemon.name">{{ pokemon.name }}</option>
    </select>
  </div>
</template>

<script>
  export default {
    props: {
      pokemonList: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        selectedPokemon: '',
      }
    },
    methods: {
      /**
       * Función que emite un evento con el pokemon seleccionado
       */
      changePokemon() {
        this.$emit('update:selectedPokemon', this.selectedPokemon);
      },
    },
    
  }
</script>