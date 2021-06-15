var weatherApp =  angular.module('weatherApp', ['ngRoute','ngResource']);


weatherApp.controller('homeController',function($scope, $log){
	$log.info('started');
});