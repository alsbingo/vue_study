<template>
    <div>
        <el-button type="danger" round @click="Logout">{{$t('nav.logout')}}</el-button>
    </div>
</template>

<script>
import store from '../store/index'

export default {
    name:'LogOut',
    methods: {
        Logout:function(){
            this.$confirm('是否退出系统?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'info'
        }).then(() => {
           store.commit('clearUser');
        }).catch(() => {
        //   this.$message({
        //     type: 'info',
        //     message: '已取消删除'
        //   });          
        });
           
        }
    }
}
</script>