angular.module('app')
	.controller('rootController', ['$scope','$state', function ($scope, $state) {


// 跳转的是路由的状态名称，不是路径（状态机）
		$scope.goPage = function (url) {
			
			$state.go(url)
		}

	}])