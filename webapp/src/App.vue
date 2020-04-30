<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Weather/>-->
    <!-- <Login></Login> -->
    <keep-alive>

          <router-view></router-view>

    </keep-alive>
  </div>
  <!-- </el-scrollbar> -->
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import Login from './components/Login.vue'
//import Main from './components/Main.vue'

export default {
  name: "app",
  components: {
    // HelloWorld,
    //Login,
    //Main
  },
  created() {
    const isLogin = localStorage.getItem("token");
    if (isLogin) {
      //next()
      this.$router.push("/Main");
      // router.push(to.fullPath)
    } else {
      this.$router.push("/Login");
    }
  }
};
</script>

<style>
/*展示列表的区域，超过200px出现滚动条*/
.page-component__scroll {
  height: 100%;
}
.page-component__scroll .el-scrollbar__wrap {
  overflow-x: auto;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  height: 100%;
}
</style>
