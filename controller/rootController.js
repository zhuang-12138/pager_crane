angular.module('app')
	.controller('rootController', ['$scope','$state', function ($scope, $state) {

		$scope.goPage = function (url) {
			
			$state.go(url)
		}

	}])