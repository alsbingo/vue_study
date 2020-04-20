new Vue({
  el: '#app',
  data() {
    return {
      title: "Vue.js",
      activeIndex: '1',
      activeSideIndex: "11",
      selectedPath: "",
      selectedMenu: {},
      menus: [
        {
          id: '1', title: "Vue基础", sideMenus: [
            { id: "11", title: "模板语法", path: "./views/vue基础/01-模板语法.html" },
            { id: "12", title: "计算属性和侦听器", path: "./views/vue基础/02-计算属性和侦听器.html" },
            { id: "13", title: "Class与Style绑定", path: "./views/vue基础/03-Class与Style绑定.html" },
            { id: "14", title: "条件渲染", path: "./views/vue基础/04-条件渲染.html" },
            { id: "15", title: "列表渲染", path: "./views/vue基础/05-列表渲染.html" },
            { id: "16", title: "事件处理", path: "./views/vue基础/06-事件处理.html" },
            { id: "17", title: "表单输入绑定", path: "./views/vue基础/07-表单输入绑定.html" },
            { id: "18", title: "组件基础", path: "./views/vue基础/08-组件基础.html" },
          ]
        },
        {
          id: '2', title: "组件高级", sideMenus: [
            { id: "21", title: "组件注册", path: "./views/组件高级/01-组件注册.html" },
            { id: "22", title: "Prop", path: "./views/组件高级/02-Prop.html" },
            { id: "23", title: "自定义事件", path: "./views/组件高级/03-自定义事件.html" },
            { id: "24", title: "插槽", path: "./views/组件高级/04-插槽.html" },
            { id: "25", title: "动态组件 & 异步组件", path: "./views/组件高级/05-动态组件 & 异步组件.html" },
            { id: "26", title: "处理边界情况", path: "./views/组件高级/04-处理边界情况.html" },
          ]
        },
        { id: '3', title: "过渡&动画" , sideMenus: [
            { id: "31", title: "进入/离开&列表过渡", path: "./views/过渡&动画/01-进入/离开&列表过渡.html" },
            { id: "32", title: "状态过渡", path: "./views/过渡&动画/02-状态过渡.html" }
          ]},
        { id: '4', title: "规模化" , sideMenus: [
            { id: "41", title: "路由", path: "./views/规模化/01-进入/路由.html" },
            { id: "42", title: "状态管理", path: "./views/规模化/02-状态管理.html" }
          ]},
        {
          id: '5', title: "语言", child: [
            { id: '51', title: "中文" },
            { id: '52', title: "英文" }
          ]
        },
      ],
      input: ""
    }
  },
  created() {
    this.selectedMenu = this.menus.find(p=>p.id==this.activeIndex);
    this.activeSideIndex = this.selectedMenu.sideMenus[0].id;
    this.selectedPath = this.selectedMenu.sideMenus[0].path;
  },
  methods: {
    handleSelect(key, keyPath) {
      this.selectedMenu = this.menus.find(p=>p.id==key)
      this.activeSideIndex = this.selectedMenu.sideMenus[0].id;
      this.selectedPath = this.selectedMenu.sideMenus[0].path;
    },
    sideMenuHandle(key, keyPath) {
      console.log(key);
      let side = this.selectedMenu.sideMenus.find(p=>p.id==key)
      this.selectedPath = side.path;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
})