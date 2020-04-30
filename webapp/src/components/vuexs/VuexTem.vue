<template>
  <div id='vuex'>
    <div>Vuex</div>
    <el-card>
      <span>
        Vuex是专门为Vue.js应用程序开发的
        <span class="hight">状态管理模式</span>。它采用集中存储管理所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生改变。
      </span>
      <div class="left">Vue的状态资管理应用包含以下几部分</div>
      <ul>
        <li>state:驱动应用的数据源</li>
        <li>view:以声名方式将state映射到视图</li>
        <li>actions:相应view上的用户输入导致的状态变化</li>
      </ul>
    </el-card>
    <el-card>
        <div class="left">
            每个Vuex的核心就是store(仓储),store基本上是一个容器，它存储着应用的大部分的状态(state)。Vuex的state和全局的对象有以下的不同：
        </div>
<ul>
    <li>
        Vuex的状态存储是响应式的。当组件从store中读取状态的时候，若store中的状态发生改变，相应组件也会发生相应的变化。
    </li>
    <li>
        无法直接更改store中的状态，只能通过显式提交mutations的方式进行更改。这样就方便跟踪状态的变化。
    </li>
</ul>
    </el-card>

  </div>
</template>

<script>
export default {
  name: "VuexTem"
};
</script>

<style>
#vuex span,
#vuex ul,
.left {
  text-align: left;
}
.hight {
  font-weight: bold;
  color: chocolate;
}
</style>