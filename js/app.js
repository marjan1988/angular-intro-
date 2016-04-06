var myApp = angular.module('myApp', []);

//Created Controller
myApp.controller('MainCtrl', function($scope){
	
	$scope.user = {};
	
	$scope.addUser = function(){
		
		console.log($scope.user);
		
	};
	
});

