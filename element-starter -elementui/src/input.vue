<template>
    <div id="" class="">
        <el-row>
            <el-col :span="12">
                <div class="sub-title">输入后匹配输入建议</div>
                <el-autocomplete class="inline-input" v-model="state2" :fetch-suggestions="querySearch"
                                 placeholder="请输入内容" :trigger-on-focus="false" @select="handleSelect"></el-autocomplete>
            </el-col>
        </el-row>
    </div>
</template>
<script>

    export default{
        data() {
            return {
                restaurants: [],
                state1: '',
                state2: '',
                compositionStatus:false
            };
        },
        methods: {
            querySearch(queryString, cb) {
                console.log(queryString);
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据
                cb(results);
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