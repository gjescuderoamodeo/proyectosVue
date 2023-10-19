<template>
  <div>
    <VisualizarDato :dato="dato"/>
  </div>
</template>

<script>
import VisualizarDato from "../components/visualizarDato.vue";
  export default {
    components: {
      VisualizarDato,
    },
    data() {
      return {
        dato: 'hola mundo'
      }
    },
    
  }
</script>

<style lang="scss" scoped>

</style>