<template>
    <div class="page">
        <AppHeader></AppHeader>
        <div>A webpage from {{ name }}</div>
        <div v-pre>A webpage from {{ name }}</div> <!--poner literal la variable {{ name }-->
        <div v-cloak>A webpage from {{ name }}</div> <!--hasta que no cargue no sale {{ name }-->
        <div v-once>A webpage from {{ name }}</div> <!--solo lo renderiza 1 vez y da igual lo modifiques-->

        <input type="text" v-model="name"> <!--enlazar modelo como en angular-->
    </div>

    <div class="page2">
        <ol>
            <li v-for="user, index in users" :key="index"> {{ user.name }} {{ index }}</li>
        </ol>
        <!--Bucle números
        <ol>
            <li v-for="r in rango" :key="index">{{ r }}</li>
        </ol>-->

        <button @click="greets">pulseme</button>
    </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
    name: "App",
    components: {
        AppHeader
    },
    data() {
        //almacen variables (reactivas) de vue
        return {
            name: "pepe",
            role: "test",
            users: [
                { name: "pepe" },
                { name: "pepe" },
                { name: "pepe" }
            ]
        }
    }
}
</script>

<style>
body {
    background-color: black;
}

.page {
    background: blueviolet;
    width: 300px;
    height: 300px;
}

.page2 {
    background: rgb(67, 125, 1);
    width: 300px;
    height: 300px;
}
</style>