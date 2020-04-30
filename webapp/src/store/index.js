import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userinfo:{
      name:"",
      photo:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      token:""
    }
  },
  mutations: {
    updateUser:function(state,payload){
      state.userinfo.name=payload.name;
      state.userinfo.token=payload.token;
      if (payload.token==""){
          localStorage.removeItem("token");
          localStorage.removeItem("user");
      }else{
          localStorage.setItem("token",payload.token);
          localStorage.setItem("user",JSON.stringify(state.userinfo));
      }
    },
    clearUser:function(state){
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      state.userinfo.name="";
      state.userinfo.token="";
      router.go('/Login')
    }
  },
  actions: {
  },
  modules: {
  }
})
