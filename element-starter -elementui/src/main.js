import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

Vue.use(ElementUI)

console.log(App);

new Vue({
  el: '#app',
  render: h => h(App)
})
