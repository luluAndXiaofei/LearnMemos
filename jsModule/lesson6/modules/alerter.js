// 定义有依赖的模块
define(['dataService'], function(dataService) {
	let msg = "alerter.js";
	function showMsg() {
		console.log(msg, dataService.getName());
	}
	
	return {showMsg};
});