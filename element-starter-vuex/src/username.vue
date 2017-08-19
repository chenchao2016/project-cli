<template>
    <div id="" class="">
        <input type="text" v-model="name" @input="changeName">
    </div>
</template>
<script>

    export default{
        data(){
            return {
                name:""
            }
        },
        methods:{
            changeName(){
                console.log(this.$store);
                this.$store.state.username = this.name;
            }
        }
    }
</script>