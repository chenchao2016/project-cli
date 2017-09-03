import Vue from 'vue'
import Button from 'element-ui/packages/button'
import  Autocomplete  from 'element-ui/packages/autocomplete'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
//
Vue.component(Button.name, Button)
Vue.use(Autocomplete)

new Vue({
  el: '#app',
  render: h => h(App)
});
