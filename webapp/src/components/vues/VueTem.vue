<template>
  <div>
    <h4>计算属性</h4>
    <div>
      <el-card>
        <div>
          简单的计算可以使用模板内计算，对于复杂的计算，需要使用
          <span class="bolder">计算属性</span>
        </div>
        <div class="left">
          <ul>
            <li>计算属性是基于他们响应式的依赖进行缓存的</li>
          </ul>
        </div>
        <span class="left">
          <pre>
 computed: {
    getTotal() {
      return this.num * this.price;
    }
  }
             </pre>
        </span>
        <div>计算属性默认只有 getter ，不过在需要时你也可以提供一个 setter</div>
        <pre>
    getSetTotal: {
      get: function() {
        return this.num * this.price;
      },
      set: function(value) {
        this.price = value / this.num;
      }
    }
        </pre>
      </el-card>
    </div>
    <h4>侦听属性</h4>
    <div>
        <p></p>
      <el-card>
        <div>
          当需要在数据发生变化时，执行异步或是开销较大的操作时，需要使用
          <span class="bolder">监听属性</span>
        </div>

        <span class="left">
          <pre>
  watch: {
    num: function() {
      this.total = this.num * this.price;
    },
    price: function() {
      this.total = this.num * this.price;
    }
  }
             </pre>
        </span>
        <div>
         <h5>实例</h5>
        <el-card>
            <input v-model="num" type='text'/>+<input v-model="price" type="input"/>={{total}}
        </el-card>
    </div>

      </el-card>
    </div>
    <div>
        <h4>条件渲染</h4>
        <el-card>
            <span class="left">
                <div>
                    <ul>
                        <li>v-if</li>
                        <li>v-show</li>
                    </ul>
                    v-if是真正意义上的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件可以适当的被销毁和创建；然而v-if又是<span class="height">惰性的</span>,如果初始时条件为假，则什么也不做，直到条件为真，才会开始渲染条件块。
                    <p></p>
                    v-show无论初始条件是什么，元素都会被渲染。并且只会根据css进行切换。
                    <p class="tip"><code>v-show</code>不支持<code>template</code>元素，也不支持<code>v-else</code></p>
                    <div>总的来说v-if有更高的切换开销，v-show有更高的初始化开销。</div>
                </div>
            <pre>

            </pre>
            </span>
        </el-card>

    </div>
    <div>
        <h4>列表渲染</h4>
        <el-card>
            <p>使用v-for指令把一个数组、对象渲染成列表</p>
数组/对象更新检测
<ul class="left">
    <li>使用变异方法:pop()、push()、shift()、unShift()、splice()、sort()、reverse()</li>
    <li>替换数组方式</li>
</ul>
<div class="tip-warning left">
    <p>由于javascript的限制，Vue不能检测如下方式的修改</p>
    <ul>
        <li>使用下标直接更改数组的某项值</li>
        <li>直接更改数据的长度</li>
        <li>不能检测对象属性的新增和删除</li>
    </ul>
    <p>v-for 和 v-if不建议一起使用，因为v-for的优先级要比v-if高，会导致v-if在每个循环里都会执行。</p>
</div>
        </el-card>
    </div>
<div>
    <h4>事件处理</h4>
    <div>
        <el-card>
    <p>可以使用v-on指令来监听事件，并在触发时运行JavaScript脚本。</p>

            <h5>事件修饰符</h5>
            <p>在事件处理程序中调用 event.preventDefault() 或 event.stopPropagation() 是非常常见的需求。尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。</p>
        </el-card>

    </div>
</div>
<div>
    <h4>表单输入绑定</h4>
    <el-card>
        <p>你可以用 v-model 指令在表单 input、textarea 及 select 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。</p>
        <div class="left">
        <p class="tip">
            v-model 会忽略所有表单元素的 value、checked、selected 特性的初始值而总是将 Vue 实例的数据作为数据来源。你应该通过 JavaScript 在组件的 data 选项中声明初始值。
        </p>
        <div>
            v-model 在内部为不同的输入元素使用不同的属性并抛出不同的事件
            <p>
                <ul>
                    <li>text 和 textarea 元素使用 value 属性和 input 事件</li>
                    <li>checkbox 和 radio 使用 checked 属性和 change 事件</li>
                    <li>select 字段将 value 作为 prop 并将 change 作为事件</li>
                </ul>
            </p>
        </div>
        </div>
    </el-card>
</div>

<div>
    <h4>组件</h4>
    <el-card>
    <p>组件是可服用的Vue实例</p>
    <p class="tip">一个组件的data必须是个函数，因此一个实例可以维护一份被返回对象的独立拷贝</p>
    <div class="left">
        组件注册
        <ul>
            <li>全局注册</li>
            <li>局部注册</li>
        </ul>
        以下方式是全局注册组件，注册之后可以使用在任何新创建的Vue根实例的模板中：
        <pre>
 Vue.component('my-component-name', {
  // ... options ...
})
</pre>
<div>局部注册</div>
<pre>
    new Vue({
  el: '#app',
  components: {
    'component-a': ComponentA,
    'component-b': ComponentB
  }
})
</pre>
<div>基础组件的自动化全局注册</div>
<pre>
    const requireComponent = require.context(
  // 其组件目录的相对路径
  './components',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)

  // 获取组件的 PascalCase 命名
  // Get the PascalCase version of the component name
  const componentName = fileName
    // Remove the "./_" from the beginning
    .replace(/^\.\/_/, '')
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
})
</pre>
<p class="tip">
    全局注册必须在根Vue实例创建之前发生。
</p>
    </div>
    </el-card>
</div>

<div>
    <h4>Prop</h4>
    <el-card>
        <h5>单项数据流</h5>
        <p>所有的prop都使得其父子之间形成一条<span class="height">单项下行绑定</span>:父级prop的更新会向下流动到子组件中，反之则不行。也就是说每次父级组件中prop发生变化时，子组件中的所有prop都会更新为最新值。</p>
    <div class="left">
      常见更改prop情形：
      <ul>
        <li>1.prop传过来的值作为初始值，子组件希望其作为本地的数据来使用。处理方案：定义一个本地data，并将prop作为其初始值。</li>
        <li>2.prop以一种原始的值传过来，希望做一些转换。解决方案：使用这个prop值来定义一个计算属性。</li>
      </ul>
      <p class="tip">
        注意在 JavaScript 中对象和数组是通过引用传入的，所以对于一个数组或对象类型的 prop 来说，在子组件中改变这个对象或数组本身将会影响到父组件的状态
      </p>
    </div>
    <h5>Prop验证</h5>
    <ComProp :age="age" name='ruz'></ComProp>
    </el-card>
</div>

<div>
  <h2>自定义事件</h2>
  <el-card>
    <p>事件名不同于组件和prop，不存在任何自动的大小写转换</p>
    <div>
      <ComProp @changeAge='changeAge' :age='age' name='ruz2'></ComProp>
    </div>
    <h5>自定义组件的v-model</h5>
  </el-card>

</div>

  </div>
</template>

<script>
export default {
  name: "VueTem",
  data() {
    return {
      num: 0,
      price: 1.0,
      total: 0,
      age:23
    };
  },
  computed: {//计算属性
    getTotal() {
      return this.num * this.price;
    },
    getSetTotal: {
      get: function() {
        return this.num * this.price;
      },
      set: function(value) {
        this.price = value / this.num;
      }
    }
  },
  watch: {//监听属性
    num: function() {
    //     var ss= [1,2,3].splice(1);
    //    console.log(ss.length)
      this.total = this.num * this.price;
    },
    price: function() {
      this.total = this.num * this.price;
    }
  },
  methods: {
    changeAge:function(data){
this.age=data;
    }
  }
};
</script>

<style>
.left,
pre {
  text-align: left;
  color: darkgoldenrod;
}
.bolder {
  font-weight: bolder;
}

</style>