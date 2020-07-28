
// 单独导入
// import sum from './a.js';
// import {double} from './a.js';
// import {n} from './a.js';

// console.log(sum(10, 20));
// console.log(double(3));
// console.log(n);

// 作为module时是本地变量，无法被其他js文件引用
var a = 4;

// 一起导入
import * as obj from './a.js';
console.log(obj.default(10, 20));
console.log(obj.double(3));
console.log(obj.n);

// 初始化代码
import "./justRun.js";