import { createRouter, createWebHistory } from "vue-router";

import MealDetails from "../views/MealDetails.vue";

import Home from "../views/Home.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";

import MealsByIngredient from "../views/ByIngredient.vue";
import MealsByLetter from "../views/ByLetter.vue";
import MealsByName from "../views/ByName.vue";
import Ingredients from "../views/Ingredient.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: Ingredients,
      },
      {
        path: "/by-ingredient/:ingredient",
        name: "byIngredient",
        component: MealsByIngredient,
      },
      {
        path: "/meal/:id",
        name: "mealDetails",
        component: MealDetails,
      },
    ],
  },
  {
    path: "/guest",
    component: GuestLayout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
