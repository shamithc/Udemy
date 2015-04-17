var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter){
	$scope.handle = ""
  $scope.handlelength = 5;
	
	$scope.lowercaseHandle = function(){
		return $filter('lowercase')($scope.handle);
	};
	
  $scope.rules = [
    {rulename: "First Rule!"},
    {rulename: "Second Rule!"},
    {rulename: "Third Rule!"}
  ];

}]);