angular.module('app')
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		//重定向：路径没找到时跳至
		$urlRouterProvider.otherwise('/');

		// 配置状态
		$stateProvider
			.state('home', {
				// home是路由的第一个页面  所以是根目录
				url: '/',
				// home页面的路径
				templateUrl: './views/home/home.html',
				// home的控制器名称
				controller: 'homeController',

				// 
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						// 懒加载的服务名称
						return $ocLazyLoad.load('home');
					}]
				}
			})

	}])