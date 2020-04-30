<template>
<div>
    <div>
        <el-dropdown @command="handleCommand">
            <div class="el-dropdown-link">
            <el-avatar style="float:left;margin-right:10px;" :src="userInfo.photo"></el-avatar>
<span style="font-size:18px;">{{userInfo.name}}</span><i class="el-icon-arrow-down el-icon--right"></i>
            </div>
          <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="modifyPwd">修改密码</el-dropdown-item>
  
  </el-dropdown-menu>
        </el-dropdown>
        
    </div>
   
</div>
</template>

<script>
export default {
    name:"User",
    // data(){
    //     return {
    //         userInfo:{name:"",photo:""}
    //     }
    // },
    computed: {
        userInfo() {
            return this.$store.state.userinfo;
        }
    },
    methods: {
        handleCommand(c){
            if(c=='modifyPwd'){
                this.$prompt('请输入邮箱', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                        inputErrorMessage: '邮箱格式不正确'
                        }).then(({ value }) => {
                        this.$message({
                            type: 'success',
                            message: '你的邮箱是: ' + value
                        });
                        }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '取消输入'
                        });       
                        });
            }
            
        }
    }
}
</script>

<style>
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
</style>