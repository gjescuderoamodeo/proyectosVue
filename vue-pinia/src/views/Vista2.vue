<template>
    <div>
        <ObtenerDato @updateDato="updateDato" />
    </div>
</template>

<script>
import ObtenerDato from '../components/obtenerDato.vue';
import eventBus from '../js/eventBus';
export default {
    components: {
        ObtenerDato,
    },
    data() {
        return {
            dato: ''
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