var app = angular.module ("PhoneBook", []);
app.controller("MainCtrl", function($scope) {
$scope.contactlist=[];
$scope.nameSearch="";
$scope.clickCheck = function () {

	nameValidator();
	phoneValidator();

	if( nameValidator() && phoneValidator()){
		$scope.contactlist.push($scope.name + " " + $scope.phone);
		$scope.name = "";
		$scope.phone = "";
	}

};
var nameValidator = function() {
	if ($scope.name === "" || $scope.name === null) {
		$scope.nameError = "Please enter your name";
		return false;
	}
	else {
		return true;
	}
};

var phoneValidator = function(phoneNum) {
	var phoneNum = $scope.phone;
	var splitNumber= phoneNum.split("-");
	if (splitNumber.length !== 3 || typeof splitNumber === NaN) {
		$scope.phoneError = "Your phone number needs to be all numbers and in the format XXX-XXX-XXXX";
		return false;
	} 
	else if (splitNumber[0].length !== 3 || typeof splitNumber[0] === NaN) {
		$scope.phoneError = "Your phone number needs to be all numbers and in the format XXX-XXX-XXXX";
		return false;
	} 
	else if (splitNumber[1].length !== 3 || typeof splitNumber[1] === NaN) {
		$scope.phoneError = "Your phone number needs to be all numbers and in the format XXX-XXX-XXXX";
		return false;
	} 
	else if (splitNumber[2].length !== 4 || typeof splitNumber[2] === NaN) {
		$scope.phoneError = "Your phone number needs to be all numbers and in the format XXX-XXX-XXXX";
		return false;
	}
	else {
		return true;
	}
};
});
