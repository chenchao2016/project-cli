<template>
  <div id="app">
      <mt-picker :slots="myslots" value-key="name" @change="onValuesChange" :visible-item-count="5"></mt-picker>
      <br>
      <p>{{province}} | {{city}} | {{direct}}</p>
  </div>
</template>

<script>

const province = [ {
    name:'北京',
    id:"1",
    pid:"0"
},{
    name:'浙江 ',
    id:"2",
    pid:"0"
}];

const city = [{
    name:"北京",
    id:"1",
    pid:"1"
},{
    name:"杭州",
    id:"3",
    pid:"2"},{
    name:"金华",
    id:"6",
    pid:"2"},{
    name:"宁波",
    id:"8",
    pid:"2"}
];

const direct = [{
    name:"朝阳区",
    id:"4",
    pid:"1"
},{
    name:"滨江区",
    id:"5",
    pid:"3"},{
    name:"西湖区",
    id:"9",
    pid:"3"},{
    name:"上城区",
    id:"10",
    pid:"3"},
    {
        name:"金东区",
        id:"11",
        pid:"6"
    },{
        name:"婺城区",
        id:"12",
        pid:"6"
    }
];


export default {
  data () {
    return {
        myslots:[],
        province:"",
        city:"",
        direct:""
    }
  },
    beforeMount(){

      //发送一个ajax请求，获取 省、市、区变量，然后 给  myslots 赋值。

      this.myslots = [{
          flex: 1,
          values:province,
          className: 'slot1',
          textAlign: 'right',
          defaultIndex: 0
      }, {
          divider: true,
          content: '-',
          className: 'slot2'
      }, {
          flex: 1,
          values: city,
          className: 'slot3',
          textAlign: 'center',
          defaultIndex: 0
      }, {
          divider: true,
          content: '-',
          className: 'slot4'
      }, {
          flex: 1,
          values: direct,
          className: 'slot5',
          textAlign: 'left',
          defaultIndex: 0
      }];
    },

  methods: {
      onValuesChange(picker, values) {

          if(!values[0]) return;

          
          let provinceId = values[0].id;

          let cities = city.filter(function (item,index,arr) {
              return item.pid == provinceId;
          });
          picker.setSlotValues(1, cities);

          if(!values[1]) return;

          let cityId = values[1].id;
          let directs = direct.filter(function (item,index,arr) {
              return item.pid == cityId;
          });
          picker.setSlotValues(2, directs);

          this.province = values[0]['name'];
          this.city = values[1]['name'];
          this.direct = values[2]['name'];
      }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
