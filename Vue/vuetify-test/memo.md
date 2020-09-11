# Vuetify入门教程
## Vuetify是什么
Vuetify是基于Vue.js的UI组件库。 是遵循谷歌倡导的[Material Design specification](https://material.io/design)，高质量组件。说白了，Vuetify提供了现成的各种组件，即使没有设计方面的知识，也可以非常简单的(通过复制粘贴)来实现炫酷的UI。[官网](https://vuetifyjs.com/zh-Hans/getting-started/quick-start/)提供了非常详细的说明。

## 使用Vuetify创建第一个项目
前提:本地安装好vue-cli环境。

1. 创建普通的vue项目

```shell
$ vue create my-app
$ cd my-app
```

2. 安装vuetify包
```shell
$ vue add vuetify
```

安装时被问到是否使用默认配置，直接回车选择默认。
![avatar](./memo_pic/1.png)

3. 启动项目
```shell
$ npm run serve
```
访问http://localhost:8080/，可以看到Vuetify的欢迎画面。 
![avatar](./memo_pic/2.png)

这时观察项目结构，跟普通的vue项目不同的是有一个`src/plugins/vuetify.js`。它注册Vuetify，并在`src/main.js`中被配置。
![avatar](./memo_pic/3.png)

```js
// vuetify.js
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
});
```

```js
// main.js
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
```

## 现在我们尝试修改第一个项目
### 标题栏`v-app-bar`
- `v-app-bar`必须被`v-app`包裹。否则很多属性不生效。
- `app`属性指定该组件作为应用程序布局的一部分。用于动态调整内容的大小。
> 在 Vuetify 中，v-app组件和v-navigation-drawer、v-app-bar、v-footer等组件上的app属性会在您的应用程序启动时帮助<v-main>组件获得正确的大小。
- `dark`属性，颜色开启dark模式。字体配色会自动改变，深色背景字体会自动变白色。
- `v-app-bar-nav-icon`：专门为 v-toolbar 和 v-app-bar 创建的图标按钮组件。通常作为汉堡包菜单出现在工具栏的左侧，它通常用于控制导航抽屉的状态。default 插槽可以用来定制这个组件的图标和功能。比如使用`<v-icon>`来自定义图标。
- `v-toolbar-title`用来定义标题栏的标题。

### 导航栏`v-navigation-drawer`
- `v-navigation-drawer`必须被`v-app`包裹。否则很多属性不生效。
- `app`属性指定该组件作为应用程序布局的一部分。用于动态调整内容的大小。
- `v-model`设置为true时显示导航栏，false不显示
- `right`属性，如果不指定，则默认在左边。
- `v-list`列表通常与导航栏配合使用。

### 列表`v-list`
使用`v-list`可以轻松的生成列表。可以
- `v-list-item`是列表项。有各种属性
- `v-list-item-group`可以把列表项变成组，实现选中状态的UI
- `v-list-item-icon`表示列表项的图标。
- `v-list-item-content`是列表的内容，内容又分为1行，2行，3行。1行指定`v-list-item-title`,2行指定`v-list-item-subtitle`,3行指定``

### 可展开列表`v-list-group`
使用`v-list-group`可以在列表中生成展开列表。每个展开列表都是`v-list`的列表项。每个展开列表内有一个`v-list-item-title`跟复数个`v-list-item`。
- `v-list-item-title`需要被`<template v-slot:activator>`包裹。`activator`是`v-list-group`的具名插槽，指定后的title点击就可以展开子列表。

## 图标
使用这里的`https://materialdesignicons.com/cdn/2.0.46/`