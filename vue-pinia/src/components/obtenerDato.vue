<template>
    <div>
        <input @input="setDato" placeholder="Escribe algo" />
    </div>
</template>

<script>
import eventBus from '../js/eventBus';
export default {
    data() {
        return {
            dato: ''
        }
    },
    methods: {
        setDato(e) {
            this.dato = e.target.value;
            eventBus.$emit('updateDato', this.dato);
            //this.$emit('updateDato', this.dato);
        }
    },
}
</script>

<style lang="scss" scoped></style>