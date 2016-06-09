$(document).ready(function() {
	$("#todo-input").keyup(function(e) {
		if(e.keyCode === 13) {
		addToList($("#todo-input").val());
		$("#todo-input").val("");
		}
	});

});

function addToList(value) {
	var liElem = $("<li></li>").html(value);
	$("#list").append(liElem);

}