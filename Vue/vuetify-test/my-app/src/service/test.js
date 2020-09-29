var data = '1234';
var name = 'alex';
var password = '123456';
var str1 = `name:,data:${data},password:${password}`;  //es6中使用字符串格式化的方法进行拼接
var str2 = "name:"+name+"password:"+password+"data:"+data;//es5中使用+进行字符串拼接
console.log(str1)
console.log(str2)