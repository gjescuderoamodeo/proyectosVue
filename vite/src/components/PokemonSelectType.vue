<template>
  <div>
    <span>{{$t('pokemons_type')}}: </span>
    <select
      v-model="selectedType"
      @change="changeSelectedType">
      <option v-for="type in pokemonsTypes" :key="type.name" :value="type.name">{{ type.name }}</option>
    </select>
  </div>
</template>

<script>
  import { pokemonStore } from '../stores/pokemonStore';
  import { mapActions, mapState } from 'pinia';

  export default {
    emits: ['update:selectedType'],
    data() {
      return {
        selectedType: '',
      }
    },
    async mounted () {
      try {
        await this.fetchPokemonsTypes();
      } catch (error) {
        this.$emit('fetch:error', error);
      };
    },
    computed: {
      ...mapState(pokemonStore, ['pokemonsTypes']),
    },
    methods: {
      /**
       * Función que emite un evento con el tipo de pokemon seleccionado
       */
      changeSelectedType() {
        this.$emit('update:selectedType', this.selectedType);
      },
      ...mapActions(pokemonStore, ['fetchPokemonsTypes']),
    },
  }
</script>