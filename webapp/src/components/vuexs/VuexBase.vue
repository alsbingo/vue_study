<template>
    <div id="vuexbase">
        Vuex基本概念
        <ul>
            <li>state</li>
            <li>mutation</li>
            <li>getter</li>
            <li>action</li>
            <li>module</li>
        </ul>
        <h4>State</h4>
        <el-card>
            Vuex使用<span class="height">单一状态树</span>，用一个对象就包含了全部应用层级的状态。至此它便作为’唯一数据源‘存在。
            <div class="tip">
                <span>在Vue中获取Vuex状态</span>
                <ul>
                    <li>通过store实例</li>
                    <li>从根组件中’注入‘(使用Vue.use(Vuex)):通过在根组件中注册store选项，该store选项会被注册到所有子组件中，并可以通过this.$store进行访问</li>
                </ul>
            </div>
            mapState辅助函数
            <div>
                当一个组件需要获取多个状态时，将这些状态都声名未计算属性会有些重复和冗余。mapState辅助函数可以帮助我们自动生成计算函数。
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    name:'VuexBase'
}
</script>

<style>
#vuexbase ul{
    text-align: left;
}
.height{
    font-weight: bold;
}
</style>>