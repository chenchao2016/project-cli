<template>
  <div id="app">

    <h1>{{ msg }}</h1>

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
  </div>
</template>

<script>
export default {
  data () {
    return {
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
        sumobj :{}
    }
  },

  methods: {
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
      }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
