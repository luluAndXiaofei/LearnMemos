var obj = {
    name: "张三",
    sayHello() {// 不需要写:function
        console.log(`hello, ${this.name}`);
    },
}

obj.sayHello();