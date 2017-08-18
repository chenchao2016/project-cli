<template>
  <div id="app">

      <myModel></myModel>
    <h1>{{ msg }}</h1>

      <el-select
              popper-class="hello"
              v-model.number="value9"
              filterable
              remote
              no-data-text="请输入四位尾号或完整手机号"
              placeholder="请输入关键词"
              :remote-method="remoteMethod"
              :loading="loading">
          <el-option
                  v-for="item in options4"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
          </el-option>
      </el-select>


    <el-button @click.native="startHacking">Let's do it</el-button>
    <el-table :data="tabledata" border @cell-mouse-enter="mouseenter"   :show-summary="true" summary-text="合计" :summary-method="mysum">
       <el-table-column type="selection"  width="55"  :selectable="select"></el-table-column>
       <el-table-column prop="date" label='日期' width="100px"></el-table-column>
      <el-table-column prop="name" label='姓名' width="100px"></el-table-column>
      <el-table-column prop="address" label='地址' :render-header="renderHead"></el-table-column>
        <el-table-column prop="age" label="age">
        </el-table-column>
    </el-table>
      <p>
          <el-tooltip content="this is a tip" placement="top">
              <i>123</i>
          </el-tooltip>

          <el-tooltip>
              <div slot="content">okok<br>this is a book!</div>
              <i class="el-icon-information"></i>
          </el-tooltip>
      </p>


      <el-form label-position="right" label-width="80px" :model="formLabelAlign">
          <el-form-item label="名称">
              <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
              <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>
          <el-form-item label="活动形式">
              <el-input v-model="formLabelAlign.type"></el-input>
          </el-form-item>
      </el-form>


      <el-tree :data="data2" show-checkbox="" default-expand-all="" node-key="id" ref="tree" highlight-current :props="defaultProps" @check-change="checkChange" @node-click="nodeClick">
      </el-tree>

      <div class="buttons">
          <el-button @click="getCheckedNodes">通过 node 获取</el-button>
          <el-button @click="getCheckedKeys">通过 key 获取</el-button>
          <el-button @click="setCheckedNodes">通过 node 设置</el-button>
          <el-button @click="setCheckedKeys">通过 key 设置</el-button>
          <el-button @click="resetChecked">清空</el-button>
      </div>
  </div>
</template>

<script>
    import myModel from './model.vue'

export default {
  data () {
    return {
        options4: [],
        value9: [],
        list: [],
        loading: false,
        states: ["Alabama", "Alaska", "Arizona",
            "Arkansas", "California", "Colorado",
            "Connecticut", "Delaware", "Florida",
            "Georgia", "Hawaii", "Idaho", "Illinois",
            "Indiana", "Iowa", "Kansas", "Kentucky",
            "Louisiana", "Maine", "Maryland",
            "Massachusetts", "Michigan", "Minnesota",
            "Mississippi", "Missouri", "Montana",
            "Nebraska", "Nevada", "New Hampshire",
            "New Jersey", "New Mexico", "New York",
            "North Carolina", "North Dakota", "Ohio",
            "Oklahoma", "Oregon", "Pennsylvania",
            "Rhode Island", "South Carolina",
            "South Dakota", "Tennessee", "Texas",
            "Utah", "Vermont", "Virginia",
            "Washington", "West Virginia", "Wisconsin",
            "Wyoming"],
      msg: 'Use Vue 2.0 Today!',
      tabledata:[
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
            age:'12'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
              age:'32'
        }
      ],
        sumobj :{},
        labelPosition: 'right',
        formLabelAlign: {
            name: '',
            region: '',
            type: ''
        },
        myname:"chenchao",
        data2: [{
            id: 1,
            label: '一级 1',
            children: [{
                id: 4,
                label: '二级 1-1',
                children: [{
                    id: 9,
                    label: '三级 1-1-1'
                }, {
                    id: 10,
                    label: '三级 1-1-2'
                }]
            }]
        }, {
            id: 2,
            label: '一级 2',
            children: [{
                id: 5,
                label: '二级 2-1'
            }, {
                id: 6,
                label: '二级 2-2'
            }]
        }, {
            id: 3,
            label: '一级 3',
            children: [{
                id: 7,
                label: '二级 3-1'
            }, {
                id: 8,
                label: '二级 3-2'
            }]
        }],
        defaultProps: {
            children: 'children',
            label: 'label'
        }
    }
  },
    mounted(){
        this.list = this.states.map(item => {
            return { value: item, label: item };
        });
    },
    components:{
        myModel
    },

  methods: {
      remoteMethod(query) {
          let reg = /(^[0-9]{4}$)|(^1[0-9]{10}$)/;

          if ( reg.test(query)) {
              this.loading = true;

              setTimeout(() => {
                  this.loading = false;
                  this.options4 = this.list;
              }, 200);
          } else {
              this.options4 = [];
          }
      },
    startHacking () {
      this.$notify({
        title: 'It Works',
        message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
        duration: 6000
      })
    },
      mysum(a){
          return [1,2,3];
      },
      mouseenter(row, column, cell, event){
          console.log(123);
      },
      select(row,index){
          return false;
      },
      renderHead(h,scope){

          var vnode = [
                  h('span','spantag'),
                  h('el-tooltip',{
                      attrs:{
                          class:"el-icon-information el-tooltip",
                          effect:'dark',
                          placement:"top-start"
                      }
                  },[h('i'),h('div',{
                      slot:'content',
                      domProps:{
                          innerHTML: 'this is <br>  a test;'
                      }
                  })])
          ];


          return vnode;
      },
      getCheckedNodes() {
          console.log(this.$refs.tree.getCheckedNodes());
      },
      getCheckedKeys() {
          console.log(this.$refs.tree.getCheckedKeys(false));
          console.log(this.$refs.tree.children);
      },
      setCheckedNodes() {
          this.$refs.tree.setCheckedNodes([{
              id: 5,
              label: '二级 2-1'
          }, {
              id: 9,
              label: '三级 1-1-1'
          }]);
      },
      setCheckedKeys() {
          this.$refs.tree.setCheckedKeys([3]);
      },
      resetChecked() {
          this.$refs.tree.setCheckedKeys([]);
      },

      nodeClick(){
          console.log('-------')
          console.log(arguments);
      },
      checkChange(){
          console.log('++++++++')
          console.log(arguments);
      }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
