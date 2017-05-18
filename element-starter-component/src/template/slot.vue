<template>
    <div id="" class="child">
        <slot text="this is child" :row="thisrow">child slot</slot>
    </div>
</template>
<script>

    export default{
        data(){
            return {
                thisrow:'',
                name:{
                    obj:'okokok'
                }
            }
        },
        mounted(){
            this.thisrow = this.name;
        }
    }
</script>