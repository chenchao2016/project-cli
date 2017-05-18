<template>
    <span>
        <option  v-for="item in opt" :value="item.value" :key="item.key"></option>

    </span>
</template>
<script>

    export default{
        data(){
            return {
                opt : [
                        {'key':1,'value':'opts1'},
                        {'key':2,'value':'opts2'},
                        {'key':3,'value':'opts3'}
                        ]
            }
        }
    }
</script>