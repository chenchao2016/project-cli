<template>
  <div id="app">
    <name></name>
    <mybutton></mybutton>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  import name from "./username.vue";
  import button from './button.vue';

export default {
  data () {
    return {
      msg: 'Use Vue 2.0 Today!'
    }
  },
  components:{
    name,
    mybutton:button
  },

  methods: {}
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
