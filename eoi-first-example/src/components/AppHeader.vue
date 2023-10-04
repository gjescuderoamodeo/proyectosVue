<template>
    <header>
        <h1>test</h1>
        <img :src="imageUrl" :alt="imageText"> <!-- para que coja la variable -->
    </header>
</template>

<script>
export default {
    name: "AppHeader", //nombre para el componente
    data() {
        return {
            imageText: "michi",
            imageUrl: "https://www.record.com.mx/sites/default/files/styles/v2-crop768x433/public/articulos/2023/08/08/cat-3266673_1280.jpg?itok=818wX96J"
        }
    }
}
</script>

<style>
img {
    width: 200px;
    height: auto;

}
</style>