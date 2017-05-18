<template>
  <div id="myapp">

     <el-button @click.native="startHacking">Let's do it</el-button>
     <sy-hello></sy-hello>

      <table>
          <sy-tr :number="1" :type="{obj:123}" val = 'ok'></sy-tr>
      </table>
      <select name="name" id="my-id">
          <sy-option></sy-option>
      </select>

      <!--slot-->

      <div id="slot-test">
          mounted point
          <sy-fa>
              <p slot="words">this is a test</p>
               <sy-child slot="child"></sy-child>
          </sy-fa>
      </div>


      <div>
          <sy-slot>
              <template scope="myprop">
                  <p>parent</p><p>{{myprop.text}}</p><p>{{myprop.row.obj}}</p>
              </template>
          </sy-slot>
      </div>

      <div id="list-slot">
          <sy-list ref="profile">
              <template scope="list" slot="list-slot">
                  <li v-text="list.text"></li>
              </template>
          </sy-list>
      </div>

      <div id="slottable">
          <table border="1" style="border-collapse: collapse">
              <thead>
              <tr>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
              </tr>

              </thead>
              <sy-table>

              </sy-table>
          </table>
      </div>

  </div>
</template>

<script>
  import hello from './template/hello.vue'
  import tr from './template/tr.vue'
  import option from './template/option.vue'
  import counter from './template/counter.vue'

  import father from './template/father.vue'
  import child from './template/child.vue'

  import myslot from './template/slot.vue'

  import listslot from './template/slotlist.vue'
  import tableslot from './template/slottable.vue'

export default {
  data () {
    return {
      msg: 'Use Vue 2.0 Today!',

    }
  },
  components:{
    'sy-hello':hello,
      'sy-tr':tr,
      'sy-option':option,
      'sy-fa':father,
      'sy-child':child,
      'sy-slot':myslot,
      'sy-list':listslot,
      'sy-table':tableslot
  },
  methods: {
    startHacking () {
      this.$notify({
        title: 'It Works',
        message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
        duration: 6000
      })
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
