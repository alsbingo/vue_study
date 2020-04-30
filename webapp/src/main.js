import Vue from 'vue'
import store from './store'
import axios from './plugins/axios'
import App from './App.vue'
import './plugins/element.js'
import router from "./router/router.js"
import i18n from './i18n'
// import moment from 'moment'

Vue.config.productionTip = false

// Vue.filter("dateTimeFilter", function(date, formatPattern){  
//   return moment(date).format(formatPattern || "YYYY-MM-DD HH:mm.ss");  
// });

const requireContext=require.context('./components/coms/',false,/[A-Z]\w+\.(vue|js)$/)

requireContext.keys().forEach(fileName=>{
  const componentConfig = requireContext(fileName)
  console.log(componentConfig);
  // // 获取组件的 PascalCase 命名
  // Get the PascalCase version of the component name
  const componentName = fileName
    // Remove the "./_" from the beginning
    .replace(/^\.\//, '')
    // Remove the file extension from the end
    .replace(/\.\w+$/, '')
    // Split up kebabs
    .split('-')
    // Upper case
    .map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1))
    // Concatenated
    .join('')

  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
});

new Vue({
  axios,
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
