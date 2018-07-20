angular.module('app')
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		//重定向：路径没找到时跳至
		$urlRouterProvider.otherwise('/');

		// 配置状态 配置路由信息
		$stateProvider

		// 状态机  状态名
			.state('register', {
				// home是路由的第一个页面  所以是根目录
				url: '/register',
				// home页面的路径
				templateUrl: './views/register/register.html',
				// home的控制器名称
				controller: 'registerController',

				// 
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						// 懒加载的服务名称
						return $ocLazyLoad.load('register');
					}]
				}
			})

			.state('login', {
				// home是路由的第一个页面  所以是根目录
				url: '/login',
				// home页面的路径
				templateUrl: './views/login/login.html',
				// home的控制器名称
				controller: 'loginController',

				// 
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						// 懒加载的服务名称
						return $ocLazyLoad.load('login');
					}]
				}
			})

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