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
无序列表。ul li可以实现各种各样的父子结构。例如导航栏。
- type="square"：方块
- type="circle"：圆圈

如果设置没有圈，需要以下css。

```css
ul {
    list-style: none;
}
```

如果让li的元素横过来，需要以下css

```css
li {
    float: left;
}
```



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

5. 父子选择器（派生选择器）
选择的东西还会放在后面，前面的是它的父亲。

```css
div span {
    color: blueviolet;
}
```

6. 直接子元素选择器
符元素 > 子元素。这样选中的是斜体2，而不是斜体1。

```css
div > em {
    background-color: cadetblue;
}
```

```html
<div class="wrapper">
    <em>斜体2</em>
    <strong class="wrapper2">
        <em>斜体1</em>
    </strong>
</div>
```

7. 并列选择器
可以把以上几种并列写，中间没有空格

```html
<!-- 并列选择器 -->
    <div id="test">1</div>
    <div class="test">2</div>
    <p>3</p>
```

```css
div.test {
    background-color: chartreuse;
}

div#test {
    background-color: royalblue;
}
```

8. 分组选择器
当多个共用一种样式时，可以用逗号隔开多个

```css
em,
strong,
del {
    color: red;
}
```

9. 伪类选择器
CSS伪类是用来添加一些选择器的特殊效果。
```css
.baidu:hover{
    width: 100px;
    height: 100px;
    background-color: burlywood;
}

a:link {color:#FF0000;} /* 未访问的链接 */
a:visited {color:#00FF00;} /* 已访问的链接 */
a:hover {color:#FF00FF;} /* 鼠标划过链接 */
a:active {color:#0000FF;} /* 已选中的链接 */
```



```html
<em>logo1</em>
<strong>logo2</strong>
<del>logo3</del>
```

## css属性
- font-size
浏览器默认16px，但一般都是12px，14px。这个数值设置的是字体的高！

- font-weight
可以设置bold, lighter, bolder, normal, 100,200-900。但是能不能设置成功取得字体包。

- font-style
italic斜体。

- font-family
字体。arail字体是最常用的一个字体。

- color
字体颜色。没有font-color。只有color。有三种写法
1. 土鳖式（英文单词）
red，green等。

2. 颜色代码
r（红） g（绿） b（蓝）。比如ff4400或者f40

3. 颜色函数
rgb(0-255,0-255,0-255)

- border
给容器加一个外边框。能指定粗细(border-width)，展示形式(border-style)，颜色(border-color)。例如
```css
.demo {
    border:10px solid black;
}
```
border-style有solid实心，dotted点状，dashed条状虚线。

- border-left
- border-top
- border-bottom
- border-right

- text-align
文本对齐方式。left center right

- line-height
文本高度。line-height=height可以实现垂直居中。

- text-indent
首行缩进。text-indent:2em,就是缩进2个字符。1em等于1 font-size=16px

- text-decoration
文本装饰。
1. line-through代表删除线。
2. none代表没有线。
3. underline: 下划线
4. overilne：上划线

- cursor
光标样式。

1. pointer：小手
2. help：问号
3. copy：拷贝


### 总结
#### 行级元素 inline
比如span strong em a del
1. 内容决定元素所占位置大小(不占满一行)
2. 不可以通过css改变宽高


#### 块级元素 block
比如div p ul li ol form address
1. 独占一行(占满一行)
2. 可以通过css改变宽高

#### 行级块元素 inline-block
1. 内容决定元素所占位置大小(不占满一行)
2. 可以通过css改变宽高

#### 隐藏css属性
- 上述行级元素，块级元素，行级块元素都有隐式属性`display`

```css
span {
    display: inline;
}

div {
    display: block;
}

img {
    display: inline-block;
}
```

- 凡是带inline属性的，都有文字特性
```html
<img src="fy.jpg">
<img src="fy.jpg">
<img src="fy.jpg">
<img src="fy.jpg">
```
上述写法，默认每张图后面都有空格。所以图片之间会有间隙。正确写法如下
```html
<img src="fy.jpg"><img src="fy.jpg"><img src="fy.jpg"><img src="fy.jpg">
```


- 编程思想：先确定css功能，写完css，再写html