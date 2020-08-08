// 匿名函数自调用，闭包
	
(function(window) {
	let msg = "123";
	function foo() {
		console.log(msg);
	}
	window.module3 = {foo};
})(window)