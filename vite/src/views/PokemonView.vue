<template>
  <div>
    <SpinnerLoaderVue v-if="loading" :loading="loading" />
    <PokemonSelectType
      @update:selectedType="updateSelectedType"
    />
    <PokemonSelect
      v-if="pokemonsList.length > 0"
      :pokemon-list="pokemonsList"
      @update:selectedPokemon="updateSelectedPokemon"
    />
    <PokemonDetail
      :pokemon="pokemon"
    />
  </div>
</template>

<script>
import { pokemonStore } from '../stores/pokemonStore';
import { mapState, mapActions } from 'pinia';
import SpinnerLoaderVue from '../components/SpinnerLoader.vue';
import PokemonSelectType from '../components/PokemonSelectType.vue';
import PokemonDetail from '../components/PokemonDetail.vue';
import PokemonSelect from '../components/PokemonSelect.vue';

export default {
  components: {
    SpinnerLoaderVue,
    PokemonSelectType,
    PokemonDetail,
    PokemonSelect,
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapState(pokemonStore, ['pokemon', 'pokemonsList']),
  },
  methods: {
    /**
     * Función que actualiza el tipo de pokemon seleccionado
     * @param {string} selectedType Tipo de pokemon seleccionado
     */
    async updateSelectedType(selectedType) {
      try {
        this.loading = true;
        this.setPokemon(null);
        this.setPokemonsList([]);
        await this.fetchPokemonListByType(selectedType);
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    /**
     * Función que actualiza el pokemon seleccionado
     * @param {string} selectedPokemon Pokemon seleccionado
     */
    async updateSelectedPokemon(selectedPokemon) {
      this.loading = true;
      try {
        await this.fetchPokemon(selectedPokemon);
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    ...mapActions(pokemonStore, ['setPokemon', 'setPokemonsList', 'fetchPokemon', 'fetchPokemonListByType']),
  },
};
</script>

<style>
.card {
  margin-bottom: 20px;
}
.card-title {
  font-weight: bold;
  font-size: 1.2rem;
}
.card-text {
  font-size: 1rem;
}
</style>
