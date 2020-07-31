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



## tips
- 空格是文本分隔符，n个空格也只等于一个空格。非要写空格使用&nbsp;
- 如果要输出<，需要写成"&lt;,>写成&gt;