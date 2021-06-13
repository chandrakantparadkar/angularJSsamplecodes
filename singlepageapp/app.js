var myApp = angular.module('myApp', []);

myApp.controller('mainController', [ "$scope", "$log", "$filter", "$http",
		function($scope, $log, $filter, $http) {
			$scope.handle = '';

			$scope.lowercasehandle = function() {
				return $filter('lowercase')($scope.handle);
			};

		    $http.get('http://localhost:8080/greeting')
	        .success(function (result) {

	        	   console.log(result);

	        })
	        .error(function (data, status) {

	            console.log(data);

	        });

		} ]);
