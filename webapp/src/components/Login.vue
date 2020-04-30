    <template>
    <div id="app1" style="height:100%;">
      <el-card class="box-card width center">
          <div>
   <h4><span>XXX系统</span></h4> 
    <el-divider></el-divider>
  </div>
          <el-form :model="LoginInfo" :rules="rules">
            <el-form-item label="登录名" prop="LoginName"><el-input v-model="LoginInfo.LoginName" placeholder="" :disabled="fullscreenLoading"></el-input></el-form-item>
            <el-form-item label="密码" prop="pwd"><el-input show-password v-model="LoginInfo.Password" placeholder="" :disabled="fullscreenLoading"></el-input></el-form-item>
          </el-form>
          <el-row>
             <el-button type="primary" @click="Login" size="medium" :loading="fullscreenLoading">Login</el-button>
          </el-row>
      </el-card>
          <!-- <Main v-if="isAuth" ></Main> -->
          </div>
    </template>
    
    <script>
    import 'element-ui/lib/theme-chalk/index.css'
//import Main from './Main.vue'
    export default {
        name:"Login",
        data(){
            return {
               LoginInfo:{
                    LoginName:"",
                    Password:"",
               },
                isAuth:false,
                fullscreenLoading:false,
                rules:{
                    LoginName:[{ required: true, message: '请输入登录名', trigger: 'blur' },],
                    pwd:[{ required: true, message: '请输入密码', trigger: 'blur' },]
                }
            }
        },
        created () {
            //this.$store.commit('updateUser', {name:'',token:""})
        },
        methods: {
            Login(){
                if(this.LoginInfo.LoginName==""||this.LoginInfo.Password==""){
                    return;
                }
                this.fullscreenLoading=true;
                this.axios.post('/Auth/Login',{Name:this.LoginInfo.LoginName,Password:this.LoginInfo.Password})
                .then(res => {
                    this.fullscreenLoading=false;
                    this.$message({
          message: '登录成功！',
          type: 'success'
        });
                    this.$store.commit('updateUser', {name:this.LoginInfo.LoginName,token:res.data.token})
                    this.isAuth=true;
                    this.$router.push("/Main");
                })
                .catch(err => {
                    //this.$notify();
                    this.fullscreenLoading=false;
                    this.$message.error('登录失败！');
                    console.log(err); 
                })
                
            }
        },
        components:{
//Main
        }
    }
    </script>
    
<style>
#app1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  text-align: -webkit-center;
  height: 100%;
}
.width{
    width:600px;
}
.center{
    position: relative;
    top: 30%;
    margin-left: auto;
    margin-right: auto;
}
</style>
