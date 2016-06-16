var app = angular.module("PositiveApp", ["ngRoute"]);
var CHOMMIES_TOKEN = "11e38f78b461ba7f818fc2fc74f62d08";


app.config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl: "template/feed.html"
    })
    $routeProvider.when("/me",{
        templateUrl: "template/personal.html"
    })
});
app.controller("personalCtrl", function($scope, $http) {
	$http({
   method: "GET",
   url: "http://ixchommies.herokuapp.com/props/me",
   params: { token: CHOMMIES_TOKEN }
 	}).then(function(response) {
   $scope.me = response.data;
   console.log(response.data)
 });
});

app.controller("FeedCtrl", function($scope, $http) {
	$scope.sendProp = function() {
		$http({
		method: "POST",
		url: "http://ixchommies.herokuapp.com/props",
		params: {
			token: CHOMMIES_TOKEN,
		},
		data: {
			props: $scope.newProp.text,
			for: $scope.newProp.receiver.id
		}
	}).then(function(response) {
		console.log(response.data);
		$scope.newProp = {};

	}).catch(function(response) {
		$scope.error = response.data.message;
	})
	}

	$scope.refreshProps = function() {
		$http({
		method: "GET",
		url: "http://ixchommies.herokuapp.com/props",
		params: {token: CHOMMIES_TOKEN}
	}).then(function(response) {
		console.log(response.data);
		$scope.props = response.data;
	});
	}

	$http({
		method: "GET",
		url: "http://ixchommies.herokuapp.com/brus",
		params: {token: CHOMMIES_TOKEN}
	}).then(function(response) {
		console.log(response.data);
		$scope.brus = response.data;
	});

	$http({
		method: "GET",
		url: "http://ixchommies.herokuapp.com/props",
		params: {token: CHOMMIES_TOKEN}
	}).then(function(response) {
		console.log(response.data);
		$scope.props = response.data;
	});
})



