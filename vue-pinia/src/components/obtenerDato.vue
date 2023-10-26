<template>
    <div>
        <input @input="setDato" placeholder="Escribe algo" />
    </div>
</template>

<script>
import eventBus from '../js/eventBus';
import { datoStore } from '../stores/datoStore';
import { mapActions, mapState } from 'pinia';
export default {
    computed: {
        ...mapActions(datoStore, ['dato'])
    },
    /*data() {
        return {
            dato: ''
        }
    },*/
    methods: {
        /*setDato(e) {
            this.dato = e.target.value;
            eventBus.$emit('updateDato', this.dato);
            //this.$emit('updateDato', this.dato);
        },*/
        ...mapActions(datoStore, ['setDato']),
    },
}
</script>

<style lang="scss" scoped></style>