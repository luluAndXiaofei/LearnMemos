### AJAX用途
在没有ajax之前，向后台发送一个http请求就等于请求一个新的页面。如果向保持在原页面的同时更新数据，就需要用到ajax请求了。原本是用于发送一个http请求来异步加载XML文件，现在广泛用于加载json等。

### 生成AJAX请求的方法
```js
new XMLHttpRequest()
```

#### XMLHttpRequest的open方法
用于建立一个请求，有三个参数
1. 请求类型，比如GET或者POST请求
2. 请求URL地址
3. 是否异步

```js
xhr.open("GET", 'sample.txt', true);
```
调用send()方法，请求才真正发出。请求成功后，会返回结果到responseText。要获得这个异步调用的结果，需要写一个回调函数。有两种写法。

1. onload
onload是readyState=4时的回调。但是无法判断http状态码。
```js
xhr.onload = function (){
    console.log(xhr.responseText);
}
```

2. onreadystatechange
```js
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
    }
}
```

readyState状态码
```
0. 请求未初始化
1. 服务器链接已建立
2. 请求已接收
3. 请求处理中
4. 请求完成，且响应已经就绪
```

### 请求过程的回调
onprogress()是对请求中状态的回调。此时的readyState一定为3。
```js
xhr.onprogress = function() {
    console.log(xhr.readyState);
}
```