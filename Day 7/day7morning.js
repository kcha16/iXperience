
//window.onload = function() {
	// console.log the values of First Name and Last Name 
	function getFormValues() {  
		var firstName = document.getElementById("name1").value;
		console.log(firstName);
		var firstName = document.getElementById("name2").value;
		console.log(firstName);
	
	}

	// Change the color of the div with id "color-div"
	function changeColor() {
		var change = document.getElementById("color-div");
		change.style.color = "#00CCCC"

		// change.style.color = function getRandomColor() {
  //   		var letters = '0123456789ABCDEF'.split('');
  //   		var mom = '#';
  //   		for (var i = 0; i < 6; i++ ) {
  //       		mom += letters[Math.floor(Math.random() * 6)];
  //   		};
  //   		return mom;
  //   		console.log(mom);
  //   	}
	}

 

