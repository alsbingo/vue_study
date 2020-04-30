import Vue from 'vue'
import vuerouter from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import Weather from '../components/weather.vue'
import Home from '../components/Home.vue'
import Main from '../components/Main.vue'
import Login from '../components/Login.vue'
import Slot from '../components/Slot.vue'
//import FirstSlot from '../components/slots/firstSlot.vue'
import HelloI18n from '../components/HelloI18n.vue'
//import SlotMain from '../View/SlotMain.vue'
import VuexMain from '../View/Vuex.vue'
import VueRouterMain from '../View/VueRouterMain.vue'

import RouterTem from '../components/router/Router.vue'

//Vuex template
import VuexTem from '../components/vuexs/VuexTem.vue'
import VuexBase from '../components/vuexs/VuexBase.vue'

import VueTem from '../components/vues/VueTem.vue'

import store from '../store/index'

Vue.use(vuerouter);
//Vue.use(store);
//const vueInstance = new Vue({ i18n });
const routes = [
  { path: '/Login', component: Login, name: 'Login' },
  {
    path: '/Main', component: Main, name: 'nav.main', redirect: '/Home',
    children: [
      {
        path: '/Home', name: 'vue.vue', component: Home, redirect: '/VueHome',
        children: [
          { path: '/VueHome', component: HelloWorld, name: 'nav.home' },
          { path: '/VueMain', component: VueTem, name: 'vue.vue' },
          { path: '/Axios', component: Weather, name: 'nav.axios' },
          { path: '/Slot', component: Slot, name: 'nav.slot', },
          { path: '/I18n', component: HelloI18n, name: 'nav.i18n', },
        ]
      },
      {
        path: '/VuexMain', component: VuexMain, name: 'vue.vuex', redirect: '/VuexView',
        children: [
          { path: '/VuexView', component: VuexTem, name: 'vue.vuex', },
          { path: '/VuexBase', component: VuexBase, name: 'vue.base', },
        ]
      },
      {
        path: '/RouterView', component: VueRouterMain, name: 'vue.vuerouter', redirect: '/RouterTem',
        children: [
          { path: '/RouterTem', component: RouterTem, name: 'nav.router', },
        ]
      },
    ]
  },
];

const router = new vuerouter({
  mode: 'history',
  routes
});

const originalPush = vuerouter.prototype.push;
vuerouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

//使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  // if (to.matched&&to.matched.filter(p=>p.path==to.path))
  // {
  //   return;
  // }
  //localStorage.removeItem("token");
  const isLogin = localStorage.getItem('token')
  if (isLogin) {
    next()
    //store.commit('updateUser', {token:isLogin})
    store.commit('updateUser', JSON.parse(localStorage.getItem('user')))
    // router.push("/Main")
    // router.push(to.fullPath)
  } else {
    if (to.path === '/Login') { //这就是跳出循环的关键
      next()
    } else {
      next('/Login')
    }
  }
})
export default router;