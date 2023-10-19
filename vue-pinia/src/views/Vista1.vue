<template>
    <div>
        <VisualizarDato :dato="dato" />
    </div>
</template>

<script>
import VisualizarDato from "../components/visualizarDato.vue";
import eventBus from '../js/eventBus';
export default {
    components: {
        VisualizarDato,
    },
    data() {
        return {
            dato: 'hola mundo'
        }
    },

    beforeMount() {
        eventBus.$on('updateDato', this.updateDato)
    },
    methods: {
        updateDato(newDato) {
            this.dato = newDato;
        }
    },

}
</script>

<style lang="scss" scoped></style>