[视频地址](https://ke.qq.com/webcourse/index.html#cid=231577&term_id=100273169&taid=1464738466990233&vid=5285890788241697844)
# lesson3
## javascript引入方法
1. 页面级引入
使用`script`标签可以写在页面的**任何地方**。

```html
<script>
    document.write("hello world!!!");
</script>
```

2. 引用外部文件
通过`src`属性来引入。但注意如果同时使用页面级跟外部文件，外部文件优先。
```html
<script src="1.js"></script>
```
## 声明
可以同时声明多个变量，但尽量竖着写。
```js
var a,
    b,
    c,
    d;
```

## 数据类型
分为原始值跟引用值。

1. 原始值
Number Boolean String undefined(声明，但未赋值) null(空值，比如一个变量是个函数，想清除这个函数则用null覆盖)

2. 引用值
array Object function

## 堆(heap)跟栈(stack)
### 栈(stack)先进后出
栈内存用于存储原始值。从栈内存取出的值，赋值给其他变量，会拷贝值。
```js
var a = 1; // 向系统申请名为a的房间，使用栈内存。
var b = a; // 向系统申请名为b的房间，使用栈内存。把栈内存a的值拷贝给b内存。
a = 2; // 把栈内存a的值改为2

console.log(b); // 1
```

### 原始值的不可改变性
系统在堆内存中分配了一个地址给a并赋值100, 当重新赋值200时，不会在原来的地址赋值，而是找一个新的地址赋值200，并把a移动到这个地址。此时，堆内存中同时存放100跟200。
```js
var a = 100;
a = 200;
```

### 堆(heap)先进先出
```js
var arr = [1, 2]; // 向系统申请名为arr的房间，使用栈内存！！！然后把[1, 2]放入堆内存。最后arr房间里放进[1, 2]所占堆内存的地址。
var arr2 = arr; // 向系统申请名为arr2的房间，使用栈内存！！！把栈内存arr的值拷贝给arr2内存。也就是拷贝了堆内存地址！
arr.push(3); // 改变堆内存的内容。

console.log(arr2); // [1, 2, 3]
```