(function() {
	requriejs.config({
		baseUrl: '', // 基本的路径
		paths: {
			// 配置路径
			dataService: './modules/dataService',
			alerter: './modules/alerter',
		},
	});
	
	requirejs(['alerter'], function(alerter) {
		alerter.shwoMsg();
	})
})()