$(document).keypress(function(e) {
	if(e.keyCode === 103) {
		$(".text").css("color", "green");
	}
	if(e.keyCode === 98) {
		$(".text").css("color", "blue");
	}
});

var clickCount = 0;
$(document).click(function(e) {
	clickCount++;
	$("#clicks").html(" " + clickCount);

});

var $mouseX = 0, $mouseY = 0;
var $xp = 0, $yp =0;

$(document).mousemove(function(e){
    $mouseX = e.pageX;
    $mouseY = e.pageY;    
});

var $loop = setInterval(function(){
// change 12 to alter damping higher is slower
$xp += (($mouseX - $xp)/12);
$yp += (($mouseY - $yp)/12);
$("#box").css({left:$xp +'px', top:$yp +'px'});  
}, 30);