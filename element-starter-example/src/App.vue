<template>
    <div id="myapp">
        <h1>{{ msg }}</h1>
        <el-button @click.native="startHacking">Let's do it</el-button>
        <el-select v-model="value" placeholder="请选择">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>

        <el-button type="primary" @click="addRow">add</el-button>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    label="日期"
                    width="180">
                <template scope="scope">
                    <span v-if="!scope.row.edit">{{ scope.row.date }}</span>
                    <input v-else type="text" v-model="scope.row.date">
                </template>
            </el-table-column>
            <el-table-column
                    label="姓名"
                    width="180">
                <template scope="scope">
                    <el-popover trigger="hover" placement="top">
                        <p>姓名: {{ scope.row.name }}</p>
                        <p>住址: {{ scope.row.address }}</p>
                        <div slot="reference" class="name-wrapper">
                            <el-tag>{{ scope.row.name }}</el-tag>
                        </div>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template scope="scope">
                    <el-button
                            size="small"
                            @click="handleEdit(scope)">编辑
                    </el-button>
                    <el-button
                            size="small"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>


        <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

        <el-dialog title="收货地址" v-model="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="活动名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="活动区域" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>

        <el-table :data="tableData2" border>

            <el-table-column label="时长" prop="shichang" :render-header="renderhead">
            </el-table-column>
            <el-table-column prop="shichang" label="标签" width="100"
                             :filters="[{ text: '家', value: '123' }, { text: '公司', value: '公司' }]"
                             :filter-method="filterTag">
                <template scope="scope">
                    <el-tag :type="scope.row.shichang === '123' ? 'primary' : 'success'" close-transition>
                        {{scope.row.shichang}}
                    </el-tag>
                </template>
            </el-table-column>

            <el-table-column label="移动">
                <el-table-column prop="move.marketing" label="label1"></el-table-column>
                <el-table-column prop="move.verification" label="label2"></el-table-column>
                <el-table-column prop="move.notice" label="label3"></el-table-column>
            </el-table-column>
            <el-table-column label="电信">
                <el-table-column prop="telcom.marketing" label="label1"></el-table-column>
                <el-table-column prop="telcom.verification" label="label2"></el-table-column>
                <el-table-column prop="telcom.notice" label="label3"></el-table-column>
            </el-table-column>
        </el-table>

    </div>

</template>

<script>
    export default {
        data () {
            return {
                msg : 'Use Vue 2.0 Today!',
                edit: false,
                tip : "okok <br> yes",

                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }],

                value: '',

                tableData        : [{
                    date   : '2016-05-02',
                    name   : '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    edit   : false
                }, {
                    date   : '2016-05-04',
                    name   : '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                    edit   : false
                }, {
                    date   : '2016-05-01',
                    name   : '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄',
                    edit   : false
                }, {
                    date   : '2016-05-03',
                    name   : '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                    edit   : false
                }],
                dialogFormVisible: false,
                form             : {
                    name    : '',
                    region  : '',
                    date1   : '',
                    date2   : '',
                    delivery: false,
                    type    : [],
                    resource: '',
                    desc    : ''
                },

                formLabelWidth: '120px',

                tableData2: [{
                    "shichang": "123",
                    "move"    : {
                        "marketing"   : 50,
                        "verification": 50,
                        "notice"      : 50
                    }
                }, {
                    "shichang": "123",
                    "move"    : {
                        "marketing"   : 50,
                        "verification": 50,
                        "notice"      : 50
                    },
                    "telcom"  : {
                        "marketing"   : 50,
                        "verification": 50,
                        "notice"      : 50
                    }
                },
                    {
                        "shichang": "123",
                        "move"    : {
                            "marketing"   : 50,
                            "verification": 50,
                            "notice"      : 50
                        },
                        "telcom"  : {
                            "marketing"   : 50,
                            "verification": 50,
                            "notice"      : 50
                        }
                    }, {
                        "shichang": "0~10秒",
                        "move"    : {
                            "marketing"   : 50,
                            "verification": 50,
                            "notice"      : 50
                        },
                        "telcom"  : {
                            "marketing"   : 50,
                            "verification": 50,
                            "notice"      : 50
                        }
                    }]

            }
        },

        methods: {
            filterTag(value, row) {
                return row.shichang === value;
            },
            renderhead(h, scope){

                var label = scope.column["label"];
                var tip = this.tip;


                var node = [
                        h('span',label),
                    h('el-tooltip', {
                            attrs: {
                                'class'  : 'el-icon-information',
                                effect   : 'dark',
                                placement: 'top-start'
                            }
                        }, [h('i'), h('div', {slot: "content", domProps: {innerHTML: '多行信息<br>第二行信息'}})]
                )];

                return node

            },
            startHacking () {
                this.$notify({
                    title   : 'It Works',
                    message : 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
                    duration: 6000
                })
            },
            addRow(){
                this.tableData.push({
                    date   : '2016-05-03',
                    name   : 'chchhcchh',
                    address: '上海市普陀区金沙江路 1516 弄'
                })
            },
            handleEdit(scope) {
                console.log(scope)
                console.log(this)
                scope.row.edit = true;
            },
            handleDelete(index, row) {
                console.log(index, row);
                row.edit = false
            }
        }
    }
</script>

<style>
    body {
        font-family: Helvetica, sans-serif;
    }
</style>
