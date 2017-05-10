<template>
    <div id="" class="">bar  </div>
</template>
<script>

    export default{
        name:"BAR",
        data(){
            return {}
        },
        beforeRouteEnter(to,from,next){
            console.log(to);
            next();
        }
    }
</script>