# lesson1

## html标签
一个html只有一个html标签，且必须有。

## head标签
title标签，浏览器的特性等。

## title
标题

## body标签
展现给用户的内容

## 属性写法
属性名=属性值即可。但是属性名不需要加双引号，属性值必须加双引号。

## charset属性
```html
<meta charset="utf-8">
```

## lang=“en”
告诉浏览器爬虫，我们的网站是关于什么内容的

## h1~h6标签

## p标签
段落标签

## strong标签
加粗

## em标签
斜体

## del标签
删除线

## address标签
地址标签。成段标签+斜体而已，并没有特殊。

## div标签
结构化。

- 使用div前
```html
<strong style="color:#f40">a<strong>
<em style="color:#f40">b</em>
<del style="color:#f40">c</del>
```

- 使用div后
```html
<div style="color:#f40">
    <strong>a<strong>
    <em>b</em>
    <del>c</del>
</div>
```

## span标签

## ol li标签
有序列表。

- type="A" : 英文字母大写
- type="a" : 英文字母小写
- type="i" : 罗马数字小写
- type="I" : 罗马数字大写
- type="1" : 按数字排序（默认）
- reversed="reversed" : 倒叙排序
- start="2" : 从几开始排

## ul li标签
无序列表。


## tips
- 空格是文本分隔符，n个空格也只等于一个空格。非要写空格使用&nbsp;
- 如果要输出<，需要写成"&lt;,>写成&gt;


## img标签
引入图片

- src属性
1. 网上url：直接设置
2. 本地的相对路径
3. 本地的绝对路径

- alt属性
图片占位符

- title属性
图片提示符

## a标签
- href属性
超文本饮用

- target属性
target="_blank"就是在新标签中打开

- 锚点
就是a标签的href可以添加本网页内元素id，可以快速跳到该元素处。
比如 
```html
<div id="demo1" style="width:100px;height:100px;background-color:green"></div>
<a href="#demo1">回到demo1 </a>
```

- 打电话(手机端)
```html
<a href="tel:08034386808">打电话</a>
```

- 发邮件
```html
<a href="mailto:584783369@qq.com">发邮件</a>
```

- 运行javasript代码
<a href="javascript:while(1) {...}"></a>

- 内容
内容可以是任何东西。文本，图片

## form标签
- method属性
可以指定get/post

- action属性
发送给谁

- input标签
  - type=“text”
  - type="password"
  - type="radio" name="star" value="1" checked="checked"单选框
  - type="checkbox" name="star" value="1" 复选框
  - type="submit" value="login"
  - name="" :指定数据名

```html
<form method="get" action="">
    <p>
        <input type="radio" name = "sex" value="0" checked="checked">男
    </p>
    <p>
        <input type="radio" name = "sex" value="1">女
    </p>
    <p>
        <input type="submit" value="submit">
    </p>
</form>
```

## select标签
- name属性：必须指定name属性才能传值
- option标签：下拉菜单选项。
  - value属性：下拉菜单值

```html
<select name="city" id="city">
    <option value="beijing">beijing</option>
    <option value="shanghai">shanghai</option>
    <option value="tianjin">tianjin</option>
</select>
```

# lesson2
## 引入css方法

- css是异步加载（跟html同时下载）

1. 行间样式：用style属性
2. 页面级css：写在head里, style标签。写法类似javascript里的对象。不同的是每个属性后面都是分号结束。

```html
<style>
    div{
        width: 100px;
        height: 100px;
        background-color: royalblue;
    }
</style>
```

3. 引入外部文件：使用link标签
```html
<link rel="stylesheet" href="2.css">
```

## 选择器
1. 根据标签的ID去定义ID选择器。#加上id即可找到标签。

```html
<div id=only>123</div>
```

```css
#only {
    background-color: red;
}
```
2. 根据class去定义选择器。.加上class即可找到标签。并且可以写多个，中间用空格隔开。

```html
<div class="demo demo1">123</div>
```

```css
.demo {
    background-color:#ff0;
}
.demo1 {
    color: #f40;
}
```

3. 标签选择器。
```css
span {
    color: blueviolet;
}
```

4. 属性选择器比如：[id]
```css
[id] {

}
```

## 优先级
以下优先级从大到小排列

css选择器 | css权重(256进制)
----|----
!important|无穷大 
行间样式|1000
id|100
class/属性/伪类|10
标签/为元素|1
通配符|0