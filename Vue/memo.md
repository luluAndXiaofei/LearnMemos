渡一教育视频地址
- https://ke.qq.com/course/2588158?taid=9173255577894398

## 第一节笔记
  
### VUE的特点
  - 渐进式
  - 响应式
  - 组件化
   
### VSC配置，安装以下插件
  - Auto Rename Tag：能够自动更改结束标签
  - Live Server：自动搭建本地服务器
  - Prettier-Code formatter: 代码美化（option + Shift + f格式化代码）
  - Vetur： vue组件格式支持
  - vscode-icons：美化文件图标
  - Code Runner: 右键点击Run Code
  
### 创建第一个Vue程序
  - new一个Vue对象：控制元素的数据
  - 添加“el”： 模版
  - 添加“data”： 数据
  - 添加“methods“： 方法，绑定事件
  - 控制对象中{{}}引用数据， v-model添加响应式数据，
  - 循环引用data中的数组：
    ```html
      <li v-for="(item, i) in products" :key="i">
    ```
    - @click对应点击事件，“=methods中的函数名”
     
    
    - <Tips: 快速生成html模版>
      1. 第一步：在空文档中输入   !
      2. 第二步：按下tab键。
    
    - <Tips: vsc执行本地服务器>
      - 对着html邮件，点击open with live server
---
## 第二节笔记
### Vue实例
  创建实例后，一些配置会提升到Vue实例中。
  - 提升实例的原因有二，一个是模版需要，一个是实现响应式（通过Object.defineProperty）。
  - 提升的配置有下
    - data
    - props
    - methods
    - computed

### 挂载
  - 控制配置区域的过程称为挂载。只控制部分区域，所以Vue是渐进式。
  - 挂载方式有两种
    1. 一种是通过el:"css选择器"
    2. 通过Vue实例.$mount("css选择器")进行配置

### 模版
  - 模版的定义：模版就是Vue控制的区域。vue会把模版编译成虚拟Dom树（VNODE），然后再生成真实的DOM。效率比真实的Dom高很多。 

  - 模版写在哪里
    1. 写在挂载的元素里面，像Lessen1那样
    2. 写在vue对象的template配置里
    3. 写在render里

  - 模版的种类
     - 静态内容:普通的html内容
     - 插值{{变量名}}
     - 模版中的js代码运行环境都是使用的Vue的实例
     - 指令： 写在html元素的属性上面."指令="后面的内容都是js代码
       1. v-html: 绑定元素的innerHtml. 例如
          ```html
          <h1 v-html="title">
          ```
       这样可以防止跨站点脚本攻击

       2. v-bind: 绑定属性。注意写冒号加上属性名.例如
          ```html
          <a v-bind:href="link">百度</a>
          ```
          ,也可以省略v-bind直接「:href="link"」
       
       3. v-on: 绑定事件.注意写冒号加上事件名.例如
          ```html
          <button v-on:click="addProduct">添加</button>
          ```
          简写就是@事件名.例如@click.
       
       4. v-if: 判断元素是否需要渲染,后面跟条件什么情况下需要显示.例如
          ```html
          <h2 v-if="products.length===0">没有商品</h2>
          ```
       
       5. v-show: 跟v-if一样.只是v-show的话条件不满足也渲染.当不渲染时会自动增加style="display: none;".例如
          ```html
          <h2 v-show="products.length===0">没有商品</h2>
          ```
       
       6. v-for: 循环生成元素.例如
          ```html
          <li v-for="(item, i) in products" v-bind:key=i>
            {{item.name}} 库存:{{item.stock}}</li>
          ```
       7. v-bind:key: 用于重新渲染元素时的比对.通常跟v-for配合使用,以提高渲染效率.

       8. v-model: 语法糖,用于实现双向绑定,实际上,是自动绑定了value属性值,和注册了input事件.也就是把v-bind:value="text"跟v-on:input="text=$event.target.value"给简化了.
          ```html
          <input type="text" v-model="link" />链接地址
          ```

### 配置对象
   1. data: 配置数据
   2. template: 字符串, 配置模版
   3. el: 配置挂载的区域
   4. methods: 配置方法
   5. computed: 配置计算属性。
   > computed： 里面写方法，但当作属性用
  - 计算属性跟方法的区别
  ```c
    1. 计算属性使用时,是当成属性使用,而方法是调用的
    2. 计算属性会进行缓存,如果缓存不改变,则直接使用缓存结果,不会重新计算 
  ```
---
## 第三节笔记
### ES6模块化
   - 没有模块化的世界：全局变量污染
   - 常见的模块化标准：CommonJS，ES6 Module，AMD，CMD
   - 在ES6中一个文件就是一个模块。要想让一个普通的js文件变成模块需要指定type=module
     ```html
      <script src="index.js" type="module"></script>
     ```
   - 要想导出一个模块使用export关键字，导入一个模块使用import关键字
   - 导出有三种方式。以下导出的结果是{default:fn, double:fn, n:3}
      1. 默认导出
      ```js
      export default (a, b) {
          return a + b;
      }
      ```

      2. 普通导出
      ```js
      export function double(a) {
        return a * 2;
      }
      ```

      3. 变量导出
      ```js
      export var n = 3;
      ```
   - 导入时也有几种方式
      1. 导入上述默认(sum只是default的任意别名)
      ```js
      import sum from './a.js';
      sum(1, 2);
      ``` 
      2. 导入上述普通， 变量
      ```js
      import {double} from './a.js';
      import {n} from './a.js';
      double(n);
      ```
      3. 导入上述全部
      ```js
      import * as obj from './a.js';
      obj.default(1, 2);
      obj.double(3);
      console.log(obj.n);
      ```
      4. 导入运行代码。一般用于初始化，但是import会缓存，所以多次导入也只会运行一次。
      ```js
      import "./justRun.js"
      ```
### 组件开发
- 所谓组件化， 即把一个页面中区域功能细分， 每一个区域成为一个组件，每个组件包括：
1. 功能（js代码）
2. 内容（模版代码）
3. 样式（CSS代码）

- 组件命名一般是大驼峰，一个组件实际上是个对象。
### 创建组件方法

跟Vue的实例类似，但有以下不同
 0. 只是普通的对象，并不是Vue对象
 1. 无el, 但有类似的template,所以模版必须配置在template中
 2. data必须是一个函数，该函数必须返回对象，并把该对象作为数据。因为复用数据时可以相对独立，互不影响。

组件的例子
```js
var comp = {
  data() {
    return {
      ///
    }
  },

  template: `....`,

  computed: {
    //
  },

  methods: {
    method1() {

    },
  }
}
```

### 组件导入方法
1. 组件本身导出
 ```js
 export default {
    // data() {
    //     return {
    //         name: "张三",
    //         age: 18,
    //     };
    // },
    props: ["name", "age"],
    template,
}
 ```

2. 使用组件处导入
 ```js
 import UserInfo from "./components/UserInfo.js";
 ```

### 组件注册方法

组件注册分为**全局注册**跟**局部注册**。
1. 全局注册：
   ```js
   Vue.component('UsrInfo', UserInfo);
   ```
2. 局部注册：
   ```js
   new Vue() {
     components: {
       UserInfo: UserInfo
     }
   }
   ```
### 应用组件
把组件当成元素去使用即可。

### 向组件传递数据
1. props里面添加属性
2. 使用属性。同样是把组件当成元素, 给元素的属性赋值就会赋值给props
