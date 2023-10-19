<template>
  <div>
    <input @input="setDato" placeholder="Escribe algo"/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dato: ''
      }
    },
    methods: {
      setDato(e) {
        this.dato = e.target.value;
        this.$emit('updateDato', this.dato);
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>