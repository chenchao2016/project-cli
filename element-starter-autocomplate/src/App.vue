<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <el-autocomplete class="inline-input" v-model="state2" :fetch-suggestions="querySearch" placeholder="请输入内容" :trigger-on-focus="true" :trigger-on-button="true" trigger-button="查询" trigger-button-class="mybutton"  @select="handleSelect" ></el-autocomplete>
  </div>
</template>

<script>
export default {
    data() {
        return {
            restaurants: [],
            state1: '',
            state2: '',
            msg: 'Use Vue 2.0 Today!'
        };
    },
    methods: {
        querySearch(queryString, cb) {
            var restaurants = this.restaurants;
            setTimeout(() => {
                var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据
                console.log(results);
                if(results.length===0) results.push( { "value": "未查询到数据", "address": "" },);
                console.log('------');
                cb(results);
            },2000)
           
        },
        createFilter(queryString) {
            return (restaurant) => {
                return (restaurant.value.indexOf(queryString.toLowerCase()) === 0);
            };
        },
        loadAll() {
            return [
                { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
                { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
                { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
                { "value": "泷千家(天山西路店)", "address": "天山西路438号" }
            ];
        },
        handleSelect(item) {
            console.log(item);
        }
    },
    mounted() {
        this.restaurants = this.loadAll();
    }
}
</script>

<style>
body {
    font-family: Helvetica, sans-serif;
}
.el-button{
    position: absolute;
    top: 0;
    right: -70px;
}
</style>
