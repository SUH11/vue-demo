import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import TestRouter from './components/route/TestRouter.vue';
import Profile from './components/route/Profile.vue';
import Posts from './components/route/Posts.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/user/:id',
      name: 'user',
      component: TestRouter,
      props: true,
      children: [
        {
          path: 'profile',
          name: 'profile',
          component: Profile
        },
        {
          path: 'posts',
          name: 'post',
          component: Posts
        }
      ]
    }
  ]
})
