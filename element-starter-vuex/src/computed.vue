<template>
    <div id="" class="computed">
        this is computed
        <input type="password" v-model="pass">
        <p v-text="pass"></p>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                pass:"",
                form:{
                    pass:""
                }
            }
        },
        watch:{
            pass(){
                console.log(this.form);
            }
        },
        computed:{
            password(){
                this.form.pass = this.pass;
                return this.pass;
            }
        }
    }
</script>