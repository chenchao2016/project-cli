<template>
    <div id="" class="">foo</div>
</template>
<script>

    export default{
        beforeRouteEnter (to, from, next){
            console.log(arguments);
            next()
        }
    }
</script>