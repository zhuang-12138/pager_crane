angular.module('app')
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		//重定向：路径没找到时跳至
		$urlRouterProvider.otherwise('/home-one');

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
				url: '',
				abstract:true,
				// home页面的路径
				templateUrl: './views/home/home.html',
				// home的控制器名称
				// controller: 'homeController',

				// 
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						// 懒加载的服务名称
						return $ocLazyLoad.load('home');
					}]
				}
			})


			.state('home.home-one',{
				url:'/home-one',
				// abstract:true,
				templateUrl:'./views/home-one/home-one.html',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						// 懒加载的服务名称
						return $ocLazyLoad.load('home-one');
					}]
				}
			})
			.state('home.home-one.qingcangzq',{
				url:'/qingcangzq',
				// abstract:true,
				templateUrl:'./views/qingcangzq/qingcangzq.html',
				// resolve: {
				// 	des: ['$ocLazyLoad', function ($ocLazyLoad) {
				// 		// 懒加载的服务名称
				// 		return $ocLazyLoad.load('qingcangzq');
				// 	}]
				// }
			})
			.state('home.home-one.mingxingtk',{
				url:'/mingxingtk',
				// abstract:true,
				templateUrl:'./views/mingxingtk/mingxingtk.html',
				// resolve: {
				// 	des: ['$ocLazyLoad', function ($ocLazyLoad) {
				// 		// 懒加载的服务名称
				// 		return $ocLazyLoad.load('qingcangzq');
				// 	}]
				// }
			})
			.state('home.home-one.zhuoyidp',{
				url:'/zhuoyidp',
				// abstract:true,
				templateUrl:'./views/zhuoyidp/zhuoyidp.html',
				// resolve: {
				// 	des: ['$ocLazyLoad', function ($ocLazyLoad) {
				// 		// 懒加载的服务名称
				// 		return $ocLazyLoad.load('qingcangzq');
				// 	}]
				// }
			})
			.state('home.home-one.xingpingss',{
				url:'/xingpingss',
				// abstract:true,
				templateUrl:'./views/xingpingss/xingpingss.html',
				// resolve: {
				// 	des: ['$ocLazyLoad', function ($ocLazyLoad) {
				// 		// 懒加载的服务名称
				// 		return $ocLazyLoad.load('qingcangzq');
				// 	}]
				// }
			})

			.state('home.home-two',{
				url:'/home-two',
				// abstract:true,
				templateUrl:'./views/home-two/home-two.html',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						// 懒加载的服务名称
						return $ocLazyLoad.load('home-two');
					}]
				}
			})

			.state('home.home-three',{
				url:'/home-three',
				// abstract:true,
				templateUrl:'./views/home-three/home-three.html',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						// 懒加载的服务名称
						return $ocLazyLoad.load('home-three');
					}]
				}
			})


			// 以下

			// .state('home.qingcangzq',{
			// 	url:'',
			// 	templateUrl:'./views/qingcangzq/qingcangzq.html'
			// })

			// .state('home.xingpingss',{
			// 	url:'',
			// 	templateUrl:'./views/xingpingss/xingpingss.html'
			// })

			// .state('home.zhuoyidp',{
			// 	url:'',
			// 	templateUrl:'./views/zhuoyidp/zhuoyidp.html'
			// })

			// .state('home.mingxingtk',{
			// 	url:'',
			// 	templateUrl:'./views/mingxingtk/mingxingtk.html'
			// })
	}])