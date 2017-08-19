<template>
    <div id="" class="">
        <button type="button" @click="submit">click</button>
        <button type="button" @click="test">test</button>
    </div>
</template>
<script>

    export default{
        data(){
          return {}
        },
        methods:{
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