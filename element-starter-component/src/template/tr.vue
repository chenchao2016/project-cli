<template>
    <tr>
        <td>{{type}} {{name}}</td>
        <td>{{number}} {{val}}</td>
    </tr>
</template>
<script>

    export default{
        props:{
            number:Number,
            type:Object,
            name :{
                type:String,
                default:"this is string"
            },
            val:{
                default:"yes",
                validator(value){
                    console.log(arguments);
                    return value == 'ok'
                }
            }
        }
    }
</script>