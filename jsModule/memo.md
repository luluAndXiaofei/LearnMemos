[教程地址](https://ke.qq.com/course/270677?taid=1864453893398869)

# lesson1
## 模块化
讲一个复杂的程序根据一定的规则封装成几个块（文件）。模块内部的数据，实现是私有的。只是向外暴露接口。

## 模块化的历史
- 封装对象：不安全，可以随意改变内部。
- 立即执行函数：安全。也是现代模块实现的基石。

## 模块化的好处
- 避免命名冲突
- 更好的分离
- 更高可用性
- 更高维护性

## 页面引入加载script的问题
http请求次数变多。依赖模糊。难以维护。

# lesson2
参考文件内的代码。

# lesson3
## 模块化规范
有以下几种。

## CommonJS
- Node等采用。每个文件都可以当作一个模块
- 服务器端：模块的加载是运行时同步加载的
- 浏览器端：模块需要提前编译打包处理（require函数浏览器不认识）

### 暴露模块
暴露的本质是exports对象。
```js
module.exports = value
```
或者
```js
exports.xxx = value
```

### 引入模块
第三方模块：xxx为模块名。自定义模块：xxx为模块文件路径。
```js
require(xxx);
```

### 浏览器端实现
Browserify。也称为CommonJS的浏览器端打包工具。


# lesson5
## AMD
专门用于浏览器端，模块异步加载。需要引入requrie.js

### 定义没有依赖的模块
```js
define(function(){
	return 模块;
})

<!-- 通过return暴露 -->
```
# lesson6


### 定义有依赖的模块
```js
define(['module1','moudule2'], function(m1, m2)) {
	return 模块;
})

<!-- m1, m2是module1，module2暴露的内容 -->
```

### 引入模块
```js
require(['module1', 'module2'], fuction(m1, m2) {
	使用m1，m2
})
```


# lesson9
## ES6
依赖模块需要编译打包处理。ES6通过Babel工具转换成ES5，浏览器才能执行。

## 导出模块
export

## 引入模块
import

# lesson10
常规暴露，默认暴露