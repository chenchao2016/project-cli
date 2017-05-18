<template>
    <ul>
        <slot name="list-slot" v-for="item in items" :text="item.text">内容为空</slot>
    </ul>
</template>
<script>

    export default{
        data(){
            return {
                items:[
                        {key:1,text:'list1'},
                        {key:2,text:'list2'},
                        {key:3,text:'list3'},
                        {key:4,text:'list4'}
                        ]
            }
        }
    }
</script>