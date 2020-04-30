<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button type="primary">el-button</el-button>
    </div>-->

    <el-container style="height:100%;">
      <el-header class="header">
        <el-container>
          <el-container>
            <el-aside style="width:200px;line-height:60px;color:#409EFF;">xxx</el-aside>
            <el-main style="padding:0px;">
              <div class>
                <el-menu
                  class="font18 header el-menu-demo"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#ffd04b"
                  router
                  mode="horizontal"
                  :default-active="activeIndex"
                  @select="selectMenu"
                >
                  <el-menu-item v-for="m in menus" :key="m.index" :index="m.path">{{$t(m.name)}}</el-menu-item>
                </el-menu>
              </div>
            </el-main>
          </el-container>
          <el-aside style="text-align:right;z-index:1000;">
            <div class style="float:right;margin-top:10px;">
              <div style="float:left;">
                <user style="float:left;line-height:40px;"></user>
                <!-- <el-divider direction="vertical"></el-divider> -->
                <lan style="float:right;margin-left:10px;"></lan>
              </div>

              <Logout style="float:right;margin-left:10px;"></Logout>
            </div>
          </el-aside>
        </el-container>
      </el-header>

      <el-container style="height:100%;">
        <el-aside style="width:200px;" class="side">
          <el-container class="height100">
            <el-menu
              class="height100"
              router
              :default-active="defaultSubActive"
              style="width:200px;padiing-top:1px;"
            >
              <el-menu-item v-for="m in subMenus" :key="m.path" :index="m.path">{{$t(m.name)}}</el-menu-item>
            </el-menu>
          </el-container>
        </el-aside>

        <el-main class="main" style="padding:0px;">
         <el-scrollbar class="page-component__scroll" view-class="view-box">
           <div style="height:100%;padding:20px;">
          <el-row>
            <el-breadcrumb separator="/">
              <el-breadcrumb-item
                v-for="item in $route.matched"
                :key="item.name"
              >{{ $t(item.name) }}</el-breadcrumb-item>
            </el-breadcrumb>
          </el-row>
          <el-row>
            <!-- <keep-alive> -->
 
            <router-view style="padding-bottom:40px;"></router-view>

            <!-- </keep-alive> -->
          </el-row>
           </div>
           </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Weather/>-->
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import Weather from './components/weather.vue'
import Logout from "./LogOut";
import lan from "../components/Language";
import user from "../components/User";

export default {
  name: "Main",
  components: {
    // HelloWorld,
    //Weather,
    lan,
    Logout,
    user
  },
  props: {
    firstPage: String
  },
  data() {
    return {
      activeIndex: "/Home",
      menus: [],
      subMenus: [],
      defaultSubActive: "/VueHome"
    };
  },
  created() {
    //this.activeIndex='/Home';
    //this.$router.push(this.$router.currentRoute);
    this.menus = this.$router.options.routes[1].children;
    this.subMenus = this.menus[0].children;
  },
  methods: {
    selectMenu(index) {

      this.subMenus = this.menus.find(p=>p.path==index).children;

      if (this.subMenus.length > 0) {
        this.defaultSubActive = this.subMenus[0].path;
      }
      console.info(index);
    }
  },
  computed: {
    // getDefaultSubActive(){
    //   return this.defaultSubActive;
    // }
  },
  // watch: {
  //   activeIndex() {
  //     if (this.$route.path == "/Home") {
  //       this.subMenus = this.menus[0].children;
  //     } else {
  //       this.subMenus = this.menus[1].children;
  //     }
  //   }
  // }
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
  margin-top: 0px;
  height: 100%;
  overflow: hidden;
}
.height100 {
  height: 100%;
}
.header {
  background-color: #545c64;
  padding: 0px;
  position: fixed;
  margin: 0px;
  z-index: 1000;
  width: 100%;
}
.font18 {
  font-size: 18px;
}
.font18 > li {
  font-size: 18px;
}

.side{
  position: fixed;
  height: 100%;
  margin-top: 60px;
}

.main{
  margin-left: 200px;
  margin-top: 60px;
  height: 100%;
  padding: 0px;
}
</style>
