$(document).ready(function(){
	$("#todo-input").keyup(function(e) {
		var code = e.which;
		if(code===13) {
			addToList($("#todo-input").val());
		}
	});
});


function addToList(value) {
 	var liElem = $("<li></li>").html(value);
 	$("#list").append(liElem);
 	$("#todo-input").val("");
 }
