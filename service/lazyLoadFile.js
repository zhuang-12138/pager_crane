angular.module('app')
// 服务里  只有constant能够被config使用
	.constant('lazyLoadFile',[
	{
		name: 'register',
		files: [
			'./views/register/registerController.js',
			'./views/register/register.css'
		]
	},
	{
		name: 'login',
		files: [
			'./views/login/loginController.js',
			'./views/login/login.css'
		]
	},
	{
		name: 'home',
		files: [
			'./views/home/homeController.js',
			'./views/home/home.css'
		]
	}
])