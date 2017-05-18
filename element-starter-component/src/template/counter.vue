<template>
    <div id="" class="">
        <label v-if="label">{{label}}</label>
        $<input ref="input" type="text" :value="value" @input="updateValue($event.target.value)" @focus="selectAll" @blur="formatValue">
    </div>
</template>
<script>

    export default{
        props:{
            label:{
                type:String,
                default:""
            },
            value:{
                type:Number,
                default:0
            }
        },
        mounted(){
            this.formatValue()
        },
        methods:{
            updateValue(value){
                console.log(value);
                this.$refs.input.value = value;
                this.$emit('input',value);
            },
            formatValue(){
                console.log(this.$refs.input.value);
            },
            selectAll(e){
                setTimeout(function () {
                    e.target.select();
                },0);
            }
        }
    }
</script>