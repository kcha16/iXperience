$(document).ready(function() {
	$("#submit-btn").click(function(){
		phoneValidator();
		emailValidator();
	
	});
});
function phoneValidator(phoneNum) {
	var phoneNum = $("#phone").val();
  	var phoneno = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;  
  	if(phoneNum.match(phoneno))  
        {  
      	$("#phoneX").html("Thanks for inputing your phone number").css({color: 'green'});
      	return true;
        }  
      	else  
      	{  
        $("#phoneX").html("Your phone number needs to be all numbers and in the format XXX-XXX-XXXX").css({color: 'red'});  
        return false;  
        }  
}  
	// var splitNumber= phoneNum.split("-");
	// if  (splitNumber.length !== 3 || typeof splitNumber === NaN) {
	// 	$("#phoneX").html("Your phone number needs to be all numbers and in the format XXX-XXX-XXXX");
	// 	return false;
	// } else if (splitNumber[0].length !== 3 || typeof splitNumber[0] === NaN) {
	// 	$("#phoneX").html("Your phone number needs to be all numbers and in the format XXX-XXX-XXXX");
	// 	return false;
	// } else if (splitNumber[1].length !== 3 || typeof splitNumber[1] === NaN) {
	// 	$("#phoneX").html("Your phone number needs to be all numbers and in the format XXX-XXX-XXXX");
	// 	return false;
	// } else if (splitNumber[2].length !== 4 || typeof splitNumber[2] === NaN) {
	// 	$("#phoneX").html("Your phone number needs to be all numbers and in the format XXX-XXX-XXXX");
	// 	return false;
	// };
	// return true;
function emailValidator(email) {
	var email = $("#email").val();
	var emailCode = /^\(?([0-9]{3})\)?[@]?([0-9]{3})[.]?([0-9]{3})$/;  
  	if(email.match(emailCode))  
        {  
        $("#emailX").html("Thanks for inputing your email").css({color: 'green'});
      	return true;  
        }  
      	else  
      	{  
		$("#emailX").html("Your email needs to be in the format XXX@XXX.XXX").css({color: 'red'});  
        return false;  
        }
};  
	
	// var splitEmail = email.split("@");
	// if (splitEmail.length !== 2) {
	// 	$("#emailX").html("Your email needs to be in the format XXX@XXX.XXX");
	// 	return false;
	// } else {
	// 	var splitEmail2 = splitEmail[1].split(".");

	// 	if (splitEmail2.length !== 2) {
	// 	$("#emailX").html("Your email needs to be in the format XXX@XXX.XXX");
	// 	return false;
	// 	} else if (splitEmail2[0].length !== 3) {
	// 	$("#emailX").html("Your email needs to be in the format XXX@XXX.XXX");
	// 	return false;
	// 	} else if (splitEmail2[1].length !== 3) {
	// 	$("#emailX").html("Your email needs to be in the format XXX@XXX.XXX");
	// 	return false;
	// 	};
	// };
	// return true;
	
