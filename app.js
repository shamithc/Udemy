var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	.when('/second', {
		templateUrl: 'pages/second.html',
		controller: 'secondController'
	})
	.when('/second/:num', {
		templateUrl: 'pages/second.html',
		controller: 'secondController'
	})
});

myApp.service('nameService', function(){
	var self = this;
	self.name = "Jhon Woo";

	this.nameLength = function(){
		return self.name.length;
	}
});

myApp.controller('mainController', ['$scope', 'nameService', function($scope, nameService){
	console.log('Yes, I am here');
	$scope.name = nameService.name;
	$scope.$watch('name', function(newValue){
		nameService.name = newValue;
	});
	$scope.person = {
		name: "Gladson",
		city: "abc",
		state: "pqr",
		country: "xyz",
		zip: 123456
	}

	$scope.formattedAddress = function(person){
		console.log(person)
		return person.city + ', ' + person.state + ', ' + person.country + ', ' + person.zip

	};

}]);

myApp.controller('secondController', ['$scope', '$routeParams', 'nameService', function($scope, $routeParams, nameService){
	$scope.name = nameService.name;
	$scope.num = $routeParams.num || 0;
	$scope.nameLength = nameService.nameLength();
}]);

myApp.directive('searchResult', [function(){
	// Runs during compile
	return {
		templateUrl: 'directives/search_result.html',
		replace: true,
		scope: {
			 personObject: "=",
			 formattedAddressFunction: "&"
		}	
	};
}]);