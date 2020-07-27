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
   5. computed: 配置计算属性
  - 计算属性跟方法的区别
  ```c
    1. 计算属性使用时,是当成属性使用,而方法是调用的
    2. 计算属性会进行缓存,如果缓存不改变,则直接使用缓存结果,不会重新计算 
  ```  