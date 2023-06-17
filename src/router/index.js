import vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/views/LoginView.vue';
import Main from '@/views/MainView.vue';

vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/main',
    component: Main
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
