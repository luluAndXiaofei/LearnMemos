渡一教育视频地址
- https://ke.qq.com/course/2588158?taid=9173255577894398

## 第一节-初识Vue
  
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
## 第二节-vue核心概念
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
  ```
    1. 计算属性使用时,是当成属性使用,而方法是调用的
    2. 计算属性会进行缓存,如果缓存不改变,则直接使用缓存结果,不会重新计算 
  ```
---
## 第三节-组件核心概念
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
 2. data必须是一个[**函数**]，该函数必须返回对象，并把该对象作为数据。因为复用数据时可以相对独立，互不影响。

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


---
## 第四节-使用脚手架搭建工程


### 传统工程的问题
省略.....
### vue-cli的安装
vue-cli是一个脚手架工具，它集成了很多前端技术。
这些工具，都需要
- node环境
- npm: 包管理器，用于下载各种第三方库

## 安装node

下载node：https://nodejs.org/zh-cn/

## 验证安装

打开终端，查看node和npm版本，验证是否安装成功:

```shell
node -v
npm -v
```

查看源地址是否正确

```shell
npm config get registry
```

## 搭建工程
```shell
vue create 工程名
```
1. 执行create之后会问你手动还是自动创建，选择手动
2. 只选择Babel（在linter上按空格取消选择）
```
❯◉ Babel   // 控制新版本代码的兼容性
 ◯ TypeScript
 ◯ Progressive Web App (PWA) Support
 ◯ Router
 ◯ Vuex
 ◯ CSS Pre-processors
 ◉ Linter / Formatter // 代码风格的检查
 ◯ Unit Testing
 ◯ E2E Testing
```
3. 接下来问你需要pakages.json吗，选择是。
4. 接下来会问你配置是否应用到将来的项目，输入N

## 工程讲解
> node_modules: 各种依赖。Vue以及Vue的依赖。

> public: 浏览器图标，index.html

> src:自己写的所有代码

tips
1. 第三方库不需要写路径，会自动上node_modules里面找。相对路径开头才是自己写的代码。
```js
import Vue from 'vue'
```
2. App.vue文件

   - 浏览器不认识，经过vue-cli处理可以执行

3. assets：静态资源。图片跟全局css
4. babel.config.js: 兼容性设置文件
5. package.json： 各种工程信息
6. README.md: 说明文档

## 构建并部署代码
把自己写的代码编译成可以运行的代码。执行完成之后会生成一个dist文件夹。dist用于部署

```shell
$ npm run build
```


## 热重载(第一次需要npm install)
```shell
$ npm run serve
```

---
## 第五节-制作轮播图组件

- tips。.vue文件中输入defualt会自动生成templates, script, style。只输入java则生成script。

- tips。快捷生成下列代码，只需输入div.banner-container
   ```js
   <div class="banner-container"></div>
   ```
- tips。template必须有内容。script跟style可以没有内容

- tips。html的style属性
   -  在html标签内使用style属性是为了直接使用css样式。直接对改对象加入css样式。

   - 一般的html标签都可以加入style属性直接使用css样式。

    ```html
    <div style="css样式"><div>
    <span style="css样式"></div>
    <ul style="css样式"></ul>
    <li style="css样式"></li>
    ```
- tips。css3中的transition:规定完成过渡效果需要多少秒或毫秒

    ```css
      .images {
        height: 100%;
        transition: 0.5s;
      }
  ```

- tips。html中可以使用 data-* 属性来嵌入自定义数据：
```html
<ul>
<li data-animal-type="鸟类">喜鹊</li>
<li data-animal-type="鱼类">金枪鱼</li> 
<li data-animal-type="蜘蛛">蝇虎</li> 
</ul>
```

## props约束属性类型的写法
  不约束
  ```js
  props:["banners",]
  ```
  约束属性类型为Array，必须传递
  ```js
  props: {
        banners: {
            type: Array,
            required: true,
        },
    }
  ```

## 组件中读取本地动态文件路径
读取动态文件路径需要转换模块！！！

  ```js
  下面的例子中，item.url动态指定项目内的文件路径，如果传入方直接写项目路径，打包时会无法正确转化成运行路径。

  <a :href="item.link"><img :src="item.url" alt=""></a>
  ```

  ```js
  所以传入方应该将文件路径模块化之后再传入。方法1:使用required()方法。
  
  banners: [
    { url: require("./assets/banner/banner1.jpeg"), link: "" },
  ],
  ```

  ```js
  方法2:使用import。因为在webpack中，任何东西都是模块，所以文件路径也可以被模块化导入。
  
  import banner1 from "./assets/banner/banner1.jpeg";
  banners: [
    { url: banner1), link: "" },
  ],
  ```

## Class 与 Style 绑定

  操作元素的 class 列表和内联样式是数据绑定的一个常见需求。因为它们都是 attribute，所以我们可以用 v-bind 处理它们：只需要通过表达式计算出字符串结果即可。不过，字符串拼接麻烦且易错。因此，在将 v-bind 用于 class 和 style 时，Vue.js 做了专门的增强。表达式结果的类型除了字符串之外，还可以是对象或数组。

### 绑定Html Class
我们可以传给 v-bind:class 一个对象，以动态地切换 class：
```html
<div v-bind:class="{ active: isActive }"></div>
```
此外，v-bind:class 指令也可以与普通的 class attribute 共存。当有如下模板：
```html
<div
  class="static"
  v-bind:class="{ active: isActive, 'text-danger': hasError }"
></div>
```
和如下 data：
```js
data: {
  isActive: true,
  hasError: false
}
```
结果渲染为：
```html
<div class="static active"></div>
```


### 绑定Html style
v-bind:style 的对象语法十分直观——看着非常像 CSS，但其实是一个 JavaScript 对象。CSS property 名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用引号括起来) 来命名：

```html
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```

```js
data: {
  activeColor: 'red',
  fontSize: 30
}
```

直接绑定到一个样式对象通常更好，这会让模板更清晰：
```html
<div v-bind:style="styleObject"></div>
```

```js
data: {
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}
```

### vue的生命周期
![avatar](https://cn.vuejs.org/images/lifecycle.png)

---
## 第六节-获取新闻数据

### axios
使用axios库可以轻松的发送一个ajax请求

### 安装axios
npm install axios

### async, await
js语法糖，async返回一个Promise对象。

- async 告诉程序这是一个异步，awiat 会暂停执行async中的代码，等待await 表达式后面的结果，跳过async 函数，继续执行后面代码

- async 函数会返回一个Promise 对象，那么当 async 函数返回一个值时，Promise 的 resolve 方法会负责传递这个值；当 async 函数抛出异常时，Promise 的 reject 方法也会传递这个异常值

- await  操作符用于等待一个Promise 对象，并且返回 Promise 对象的处理结果（成功把resolve 函数参数作为await 表达式的值），如果等待的不是 Promise 对象，则用 Promise.resolve(xx) 转化

- 由于async函数返回的是一个Promise对象，要接收asnyc里真正return的值有两种写法
1. 使用then接收，Promise 的 resolve 方法会负责传递这个值

```js
async function getNewsChannles() {
    var res = await axios.get("newsChannels.json");
    return res.data;
}

getNewsChannles().then(res => {
  console.log(res);
});
```

### Promise对象
创建Promise对象时，传入一个执行函数，该函数会立即执行。
Promise.then是当Promise的状态变成rejected时才调用。

```js
p2 = new Promise(function(resolve, reject) {
    console.log("start");
    setTimeout(function() {
        resolve({
            message: "撸撸会做晚饭",
            code: 200
        });
    }, 5 * 1000);
});

p2.then(value => console.log(value)); // 10S后打印
console.log("after promise run"); // 首先打印
```

#### Promise状态
Promise有三种状态，pending（进行中）、fulfilled（已成功）和rejected（已失败）。

> resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

---
## 第七节-开发新闻类别组件

## Tips: css各种属性
- cursor:pointer 鼠标指针变化
- hover: 鼠标悬停
- background: 背景色
- border-radius: 边框弧度
- border: 1px solid #ccc; 边框的粗度 颜色

## 事件修饰符

```html
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>
```

## this.$emit触发事件
- 参数：
  - {string} eventName
  - [...args]

---
## 第八节-开发新闻列表组件

---
## 第九节-开发加载组件

### 插槽
模版中的某个位置，不知道内容。此时可以使用<slot></slot>进行占位。

```html
<template>
  <div class="center">
      <slot></slot>
  </div>
</template>
```

### 往插槽里插入内容
直接往便签里写值即可。

```html
 <Center>123</Center>
```

### 插槽默认值
插槽可以有默认值，当设置值时不显示默认值，反之显示默认值

```html
<template>
  <div class="center">
      <slot>默认值</slot>
  </div>
</template>
```

---
## 第十节-完成首页
---

## 前十节练习， 查缺补漏
- 全局css需要在main.js中导入
- a标签中放入img标签，可以实现图片的跳转
- props相当于组件的外部属性。类似于html标签的属性
- computed是一个属性，放回一个function作为该属性的“getter 函数“供vue调用。
- css的属性必须用驼峰形式！！比如marginLeft,写margin-left会通不过编译！！！！！
- 清除定时器 clearInterval()
- class属性的绑定，是绑定一个实例，实例中属性值为true则代表生效。