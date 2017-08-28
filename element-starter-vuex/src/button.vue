<template>
    <div id="" class=""  @click.ctrl="eventxsf">
        <button type="button" @click="submit">click</button>
        <button type="button" @click="test">test</button>
        <button ><span>xsf</span></button>
        <input type="text" v-model="msg">
        <div>{{messageCompute}}</div>
    </div>
</template>
<script>

    export default{
        data(){
          return {
              msg:'messagetest'
          }
        },
        computed:{
            messageCompute(value){
                console.log('change');
                console.log(this.msg);
//                return this.msg+new Date().getTime();
            },
        },
        methods:{
            eventxsf(){
                console.log(123)
            },
            submit(){
                this.$store.commit('showName');
            },
            test(){
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    beforeClose:(action, instance, done) =>{
                        console.log(action);
                        console.log(instance);
                        if(action =='cancel'){
                            done()
                        }
                    }
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            }
        }
    }
</script>