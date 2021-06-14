var myApp = angular.module('myApp', ['ngRoute']);


myApp.service('nameService', function() {
   
    var self = this;
    this.name = 'John Doe';
    
    this.namelength = function() {
      
        return self.name.length;
        
    };
    
});

myApp.controller('mainController', ['$scope', '$log', 'nameService', function($scope, $log, nameService) {
    
    $scope.name = nameService.name;
    
    $log.log(nameService.name);
    $log.log(nameService.namelength());
    
}]);
