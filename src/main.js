import Vue from 'vue'
import App from './App.vue'
import router from './srouter'
import store from './store'
import create from '@/util/create';

Vue.config.productionTip = false

Vue.prototype.$create = create;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
