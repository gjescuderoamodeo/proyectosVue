import { defineStore } from 'pinia'


export const useDatoStore = defineStore('counter', {
    state: () => ({ dato: '' }),
    getters: {
        double: state => state.count * 2,
    },
    actions: {
        setDato(newDato) {
            this.dato = newDato;
        },
    },
})