<template>
    <div>
        <input  v-model.trim="value" type="text">
    </div>

</template>
<script>

    export default{
        props:[],
        data(){
            return {
                value:"测试"
            }
        }
    }
</script>