var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope,$log) {
	$scope.name = "Chandrakant";
	$log.info("name is :"+$scope.name);
	$log.warn("name is :"+$scope.name);
	$log.error("name is :"+$scope.name);

});

