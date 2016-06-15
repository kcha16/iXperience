var app = angular.module("RouterApp", ["ngRoute"]);
app.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl: "templates/validator.html"
	})
	$routeProvider.when("/phonebook", {
		templateUrl: "templates/phonebook.html"
	})
});

app.controller("ValidatorCtrl", function($scope, $location) {

var isformtrue = false;
$scope.clickcheck = function () {
	nameValidator();
	phoneValidator();
	emailValidator();
	pass1Validator();
	pass2Validator();

	if (nameValidator() && phoneValidator() && emailValidator() && pass1Validator() && pass2Validator()){
		isformtrue = true;
	}
	if (isformtrue==true) {
		$location.path("/phonebook");
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
var emailValidator = function(email) {
	var email = $scope.email;
	var splitEmail = email.split("@");
	if (splitEmail.length !== 2) {
		$scope.emailError = "Your email needs to be in the format XXX@XXX.XXX";
		return false;
	} else {
		var splitEmail2 = splitEmail[1].split(".");

		if (splitEmail2.length !== 2) {
		$scope.emailError = "Your email needs to be in the format XXX@XXX.XXX";
		return false;
		} else if (splitEmail2[0].length !== 3) {
		$scope.emailError = "Your email needs to be in the format XXX@XXX.XXX";
		return false;
		} else if (splitEmail2[1].length !== 3) {
		$scope.emailError = "Your email needs to be in the format XXX@XXX.XXX";
		return false;
		}
		else {
			return true;
		}
	}

};
var pass1Validator = function() {
	if ($scope.password1.length < 6) {
		$scope.pass1Error = "Your password must be at least 6 characters";
		return false;
	}
	else {
		return true;
	}
};
var pass2Validator = function() {
	if ($scope.password1 !== $scope.password2) {
		$scope.pass2Error = "Your passwords must match";
		return false;
	}
	else {
		return true;
	}
};
	

});

app.controller("phonebookCtrl", function($scope) {
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

