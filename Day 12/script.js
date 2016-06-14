var app = angular.module("ToDoApp", []);
app.controller("MainCtrl", function($scope) {
	$scope.newItem="";
	$scope.items=[];

	$scope.addItem = function() {
		$scope.items.push($scope.newItem);
		console.log(items);
		$scope.newItem="";
	}
	$scope.removeItem = function(x) {
		$scope.items.splice(x,1);
	}
});
