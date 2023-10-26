<template>
  <div v-if="pokemonDetails" id="pokemonDetail">
    <h2>{{$t('name')}}: {{ pokemonDetails.name }}</h2>
    <p>{{$t('types')}}: {{ pokemonDetails.types }}</p>
    <p>{{$t('height')}} (m): {{ convertFeetToMeters(pokemonDetails.height) }}</p>
    <img
      class="image-pokemon"
      :src="pokemonDetails.imageUrlFront"
      :alt="`${pokemonDetails.name} front`"
    />
    <img
      class="image-pokemon"
      :src="pokemonDetails.imageUrlBack"
      :alt="`${pokemonDetails.name} back`"
    />
  </div>
</template>

<script>
export default {
  props: {
    pokemon: {
      type: Object,
      default: () => ({}),
    }
  },
  computed: {
    /**
     * Función que devuelve los detalles del pokemon
     * @returns {object} Detalles del pokemon
     * @example
     * pokemonDetails() // { name: 'bulbasaur', height: 7, imageUrlFront: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', imageUrlBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png', types: 'grass, poison' }
     */
    pokemonDetails() {
      if (typeof this.pokemon?.name === 'undefined') return null;
      return {
        name: this.pokemon.name,
        height: this.pokemon.height,
        imageUrlFront: this.pokemon.sprites.front_default,
        imageUrlBack: this.pokemon.sprites.back_default,
        types: this.pokemonTypesToString,
      }
    },
    /**
     * Función que devuelve los tipos del pokemon
     * @returns {string} Tipos del pokemon
     * @example
     * pokemonTypesToString() // 'grass, poison'
     */
    pokemonTypesToString() {
      return this.pokemon.types.map((type) => type.type.name).join(', ');
    },
  },
  methods: {
    /**
     * Función que devuelve el valor en metros de un número dado en pies con dos decimales
     * @param {number} feet Valor en pies
     * @returns {string} Valor en metros
     * @example
     * convertFeetToMeters(1) // '0.30'
     */
    convertFeetToMeters(feet) {
      return (feet * 0.3048).toFixed(2)
    },
  }
}
</script>

<style scoped>
#pokemonDetail {
  border: 2px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-top: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}
#pokemonDetail h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}
#pokemonDetail p {
  font-size: 1.2rem;
  margin-bottom: 5px;
}
#pokemonDetail img {
  display: block;
  margin: 10px auto;
  max-width: 100%;
}
.image-pokemon {
  width: 200px;
  height: 200px;
  object-fit: cover;
  image-rendering: pixelated;
}
</style>