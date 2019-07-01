import Vue from 'vue'
// import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue';
// import VueRouter from 'vue-router';
// import TestRouter from './components/route/TestRouter.vue';
// import Profile from './components/route/Profile.vue';
// import Posts from './components/route/Posts.vue';


class VueRouter {
    constructor(options) {
        this.$options = options;
        this.routeMap = {};

        this.app = new Vue({
            data: {
                current: '/'
            }
        });
    }

    init() {
        this.bindEvents();
        this.createRouteMap(this.$options);
        this.initComponent();
    }

    bindEvents() {
        window.addEventListener('load', this.onHashChange.bind(this));
        window.addEventListener('hashchange', this.onHashChange.bind(this));
    }

    onHashChange() {
        this.app.current = window.location.hash.slice(1) || '/';
    }

    createRouteMap(options) {
        options.routes.forEach(item => {
            this.routeMap[item.path] = item.component;
        });
    }

    initComponent() {
        // router-link
        Vue.component('router-link', {
            props: { to: String },
            render(h) {
                return h('a', { attrs: { href: '#' + this.to } }, [
                    this.$slots.default
                ]);
            }
        });

        // router-view
        Vue.component('router-view', {
            render: h => {
                const comp = this.routeMap[this.app.current];
                return h(comp);
            }
        });
    }
}

VueRouter.install = function(Vue) {
    Vue.mixin({
        beforeCreate() {
            if (this.$options.router) {
                Vue.prototype.$router = this.$options.router;
                this.$options.router.init();
            }
        }
    });
}

Vue.use(VueRouter)

export default new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
      },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    // {
    //   path: '/user/:id',
    //   name: 'user',
    //   component: TestRouter,
    //   props: true,
    //   children: [
    //     {
    //       path: 'profile',
    //       name: 'profile',
    //       component: Profile
    //     },
    //     {
    //       path: 'posts',
    //       name: 'post',
    //       component: Posts
    //     }
    //   ]
    // }
  ]
})
