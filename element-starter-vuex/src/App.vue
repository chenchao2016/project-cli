<template>
  <div id="app">
    <name></name>
    <mybutton></mybutton>
    <h1>{{ msg }}</h1>
    <mycomputed></mycomputed>
    <mysetter></mysetter>
  </div>
</template>

<script>
  import name from "./username.vue";
  import button from './button.vue';
  import mycomputed from './computed.vue';
  import mysetter from "./setter.vue";

export default {
  data () {
    return {
      msg: 'Use Vue 2.0 Today!'
    }
  },
  components:{
    name,
    mybutton:button,
    mycomputed:mycomputed,
    mysetter
  },

  methods: {}
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
