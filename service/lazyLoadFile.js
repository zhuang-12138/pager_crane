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
	},
	{
		name: 'home-one',
		files: [
			'./views/home-one/homeoneController.js',
			'./views/home-one/home-one.css'
		]
	},
	{
		name: 'home-two',
		files: [
			'./views/home-two/hometwoController.js',
			'./views/home-two/home-two.css'
		]
	},
	{
		name: 'home-three',
		files: [
			'./views/home-three/homethreeController.js',
			'./views/home-three/home-three.css'
		]
	}
])