// Login Form
$(document).ready(function() {
	
//Login form start here 
    var button = $('#loginButton');
    var box = $('#loginBox');
    var form = $('#loginForm');
	button.removeAttr('href');
    button.mouseup(function(login) {
        box.toggle();
        button.toggleClass('active');
    });
	form.mouseup(function() { 
        return false;
    });
    $(this).mouseup(function(login) {
        if(!($(login.target).parent('#loginButton').length > 0)) {
            button.removeClass('active');
            box.hide();
        }
    });


$("#searchBtn").on('click', this, function(){
	loadPopup();	
});
$(this).keyup(function(event) {
	if (event.which == 27) { // 27 is 'Ecs' in the keyboard
		disablePopup();  // function close pop up
	}  	
});
$('#retBtn').click(function (){
		disablePopup();
});
var popupStatus = 0; // set value
function loadPopup() { 

	if(popupStatus == 0) { // if value is 0, show popup
		$("#resultBox").css("display", "block"); // fadein popup div
		$('#retBtn').css("display", "block");
		$("#backgroundPopup").css("display", "block"); // css opacity, supports IE7, IE8
		popupStatus = 1; // and set value to 1
	}
}
function disablePopup() {
	if(popupStatus == 1) { // if value is 1, close popup
		$("#resultBox").css("display", "none"); 
		$('#retBtn').css("display", "none");
		$("#backgroundPopup").css("display", "none");  
		popupStatus = 0;  // and set value to 0
	}
}

/*
Syntax example for javascript function click event

$('#toPopup').on('click', 'div.close', function(){
		disablePopup();  // function close pop up
});
*/
});