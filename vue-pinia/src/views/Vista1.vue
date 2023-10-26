<template>
    <div>
        <VisualizarDato :dato="dato" />
    </div>
</template>

<script>
import VisualizarDato from "../components/visualizarDato.vue";
import eventBus from '../js/eventBus';
import { mapActions, mapState } from 'pinia';
import { datoStore } from "../stores/datoStore";
export default {
    components: {
        VisualizarDato,
    },
    computed: {
        ...mapState(datoStore, ['dato']),
    }
    /*data() {
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
    },*/

}
</script>

<style lang="scss" scoped></style>