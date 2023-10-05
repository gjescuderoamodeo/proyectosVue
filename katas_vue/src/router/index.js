import { createRouter, createWebHistory } from "vue-router";
import NoldorsView from "../views/NoldorsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "family",
      // Ejemplo de lazy-loaded (genera un chunk separado cuando se compila)
      component: () => import("../views/FamilyView.vue"),
    },
    {
      path: "/noldors",
      name: "noldors",
      component: NoldorsView,
    },
    {
      path: "/pokemons",
      name: "pokemons",
      component: () => import("../views/PokemonsView.vue"),
    },
    {
      path: "/pokemons5Kyu",
      name: "pokemons5Kyu",
      component: () => import("../views/Pokemons5KyuView.vue"),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
      name: "default",
    },
  ],
});

export default router;
