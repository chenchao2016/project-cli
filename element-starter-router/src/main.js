import Vue from 'vue'
import VueRouter from "vue-router"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import routes from "./routers"

Vue.use(ElementUI);
Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

new Vue({
    el:"#app",
    router,
    render: h => h(App)
});
