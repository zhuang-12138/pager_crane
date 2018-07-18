angular.module('app')
// 服务里  只有constant能够被config使用
	.constant('lazyLoadFile',[
	{
		name: 'home',
		files: [
			'./views/home/homeController.js',
			'./views/home/home.css'
		]
	}
])