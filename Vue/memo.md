## 第一节笔记
  
- VUE的特点
  - 渐进式
  - 响应式
  - 组件化
   
- VSC配置，安装以下插件
    - Auto Rename Tag：能够自动更改结束标签
    - Live Server：自动搭建本地服务器
    - Prettier-Code formatter: 代码美化（option + Shift + f格式化代码）
    - Vetur： vue组件格式支持
    - vscode-icons：美化文件图标
    - Run Code: 右键点击Run Code
  
- 创建第一个Vue程序
   - new一个Vue对象：控制元素的数据
   - 添加“el”： 模版
   - 添加“data”： 数据
   - 添加“methods“： 方法，绑定事件
   - 控制对象中{{}}引用数据， v-model添加响应式数据，
   - 循环引用data中的数组：
   ```<li v-for="(item, i) in products" :key="i">```
   - @click对应点击事件，“=methods中的函数名”
     
    
   - <Tips: 快速生成html模版>
     1. 第一步：在空文档中输入   !
     2. 第二步：按下tab键。
    
   - <Tips: vsc执行本地服务器>
     - 对着html邮件，点击open with live server
---
## 第二节笔记
- Vue实例
  - 创建实例后，一些配置会提升到Vue实例中。
  - 提升实例的原因有二，一个是模版需要，一个是实现响应式（通过Object.defineProperty）。
  - 提升的配置有下
    - data
    - props
    - methods
    - computed

- 挂载
  - 控制配置区域的过程称为挂载。只控制部分区域，所以Vue是渐进式。
  - 挂载方式有两种
    1. 一种是通过el:"css选择器"
    2. 通过Vue实例.$mount("css选择器")进行配置

- 模版
  - 模版的定义：模版就是Vue控制的区域。vue会把模版编译成虚拟Dom树（VNODE），然后再生成真实的DOM。效率比真实的Dom高很多。 

  - 模版写在哪里
    1. 写在挂载的元素里面，像Lessen1那样
    2. 写在vue对象的template配置里

  - 模版的种类
     - 静态内容
     - 插值{{}}
     - 指令： 写在html元素的属性上面 比如
  ```<h1 v-html="title">```。指令=后面的内容都是js代码
    - v-html: 绑定元素的innerHtml
    - v-bind: 属性名。例如v-bind:href="link",也可以省略v-bind直接：href="link"