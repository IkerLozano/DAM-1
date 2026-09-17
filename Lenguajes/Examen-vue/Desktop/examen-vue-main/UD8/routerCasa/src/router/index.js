import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/Pokemons',
      name: 'Pokemons ',
      component: () => import('../views/pokemons.vue'),
    },
    {
      path: '/pokemons/:name',
      name: 'PokemonsDetalle ',
      component: () => import('../views/PokemonsDetalle.vue'),
    },
    {
      path: '/post',
      name: 'post ',
      component: () => import('../views/post.vue'),
    },
    {
      path: '/post/:id',
      name: 'postsDetalle ',
      component: () => import('../views/postsDetalle.vue'),
    },
    {
      path: '/alumnos',
      name: 'alumnos ',
      component: () => import('../views/alumnos.vue'),
    },
    {
      path: '/alumnos/:id',
      name: 'alumnosDetalles ',
      component: () => import('../views/alumnosDetalles.vue'),
    },
    {
      path: '/fotos',
      name: 'fotos ',
      component: () => import('../views/fotos.vue'),
    },
     {
      path: '/fotosDetalle/:id',
      name: 'fotosDetalle ',
      component: () => import('../views/fotosDetalle.vue'),
    }
  ],
})

export default router
