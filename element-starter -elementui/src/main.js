import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Entry from './entry.vue'

Vue.use(VueRouter);
Vue.use(ElementUI)

console.log(Entry);

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(Entry)
});
