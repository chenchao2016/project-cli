<template>
  <div id="myapp">
    <router-link to="/foo">Go to foo</router-link>
    <router-link to="/bar">Go to bar</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {},
  watch:{
    "$route":function (to,from,next) {
      console.log(to);
    }
  }
}

</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
