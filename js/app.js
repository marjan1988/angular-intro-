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
		
		$scope.removeSelected = function(){
			
			var i = $scope.users.length
			while (i --){
				
				var user = $scope.users[i];
				if(user.selected === true){
					
					$scope.users.splice(i,1);
				}
			}
			//console.log($scope.users);
		};
		
	};
	
	$scope.removeUser = function(i, user){
		//remove item from array
		$scope.users.splice(i,1);
		
	};
	
});

