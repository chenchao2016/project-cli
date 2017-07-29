import "./vendor"
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import {store} from "~/store/"

import App from './index.vue'

const router = new VueRouter({
    routes
});

new Vue({
  el: '#app',
    store,
    router,
  render: h => h(App)
})
