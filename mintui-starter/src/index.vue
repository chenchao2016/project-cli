<template>
    <div id="purchase" class="purchase">
        <img src="./assets/logo.png">
        <h1>{{ msg }}</h1>
        <mt-button @click.native="handleClick">按钮</mt-button>
        <p>router</p>

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