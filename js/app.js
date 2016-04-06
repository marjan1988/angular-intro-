var myApp = angular.module('myApp', []);

//Created Controller
myApp.controller('MainCtrl', function($scope){
	
	$scope.users = [];
	$scope.user = {};
	
	$scope.addUser = function(){
		
		var newUser = {
			
			name     : $scope.user.name,
			surename : $scope.user.surename
			
		};
		
		$scope.user.name = '';
		$scope.user.surename = '';
		
		$scope.users.push(newUser);
		
		console.log($scope.users);
	};
	
	$scope.removeUser = function(i, user){
		
		console.log(i);
		
	};
	
});

