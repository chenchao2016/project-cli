<template lang="pug">
div this is a div tag
    h2 hello
    <Hello></Hello>

</template>
<script>

    import Hello from "../../components/hello.vue"

    export default{
        components:{
            Hello
        }
    }

</script>