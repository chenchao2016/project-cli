<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <mt-button @click.native="handleClick">按钮</mt-button>
      <p>router</p>
      <router-link to="/a">page a</router-link>
      <router-link to="/b">page b</router-link>
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg: 'Use Vue 2.0 Today!'
    }
  },

  methods: {
    handleClick () {
      this.$toast('Hello world!')
    }
  }
}
</script>
