 angular.module('app')
	.controller('homeoneController', ['$scope', function ($scope) {
		$("#home-one>span").click(function(){
			$(this).addClass('click').siblings().removeClass('click');
		});
	}])