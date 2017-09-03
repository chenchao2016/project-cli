<template>
    <div id="entry" class="">
        <h3>导航</h3>
        <router-link to="/app">to app</router-link>
        <router-link to="/model">to model</router-link>
        <router-link to="/input">to input</router-link>
        <hr>
        <br>
        <router-view></router-view>
    </div>
</template>
<script>

    export default{}
</script>