var obj = {
    name: "成哥",

    // 箭头函数可以让this指向定义的地方
    sayHello: function() {
        setInterval(() => console.log(this.name), 1000);
    }

    // 这样写会使this指向运行时setInterval里面的name，由于为定义所以输出undefined
    // sayHello: function() {
    //     setInterval(function (){
    //         console.log(this.name)
    //        }, 1000);  
    // },
}

// var func = function(a, b) {
//     return a + b;
// }

// var func = (a, b) => a + b;

// console.log(func(3, 4));
// obj.sayHello();

var func = function() {
    name = "zhangsan";
    console.log(this.name);
}

func();

function a(){
    var user = "追梦子";
    console.log(this.user); //undefined
    console.log(this);　　//Window
}
a();