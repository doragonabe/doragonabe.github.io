import {createRouter, createWebHistory, Router} from 'vue-router';
import Home from './views/Home.vue';
import ServerRules from './views/ServerRules.vue';
import ServerIntroduction from './views/ServerIntroduction.vue';
import ServerSpecifications from './views/ServerSpecifications.vue';
import QAndA from './views/QAndA.vue';
import UniqueFunction from './views/UniqueFunction.vue';
import OriginalRecipes from './views/OriginalRecipes.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/server_rules',
    component: ServerRules,
  },
  {
    path: '/server_introduction',
    component: ServerIntroduction,
  },
  {
    path: '/server_specifications',
    component: ServerSpecifications,
  },
  {
    path: '/q_and_a',
    component: QAndA,
  },
  {
    path: '/unique_function',
    component: UniqueFunction,
  },
  {
    path: '/original_recipes',
    component: OriginalRecipes,
  },
];

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
