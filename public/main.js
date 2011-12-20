$(document).ready(function(){
		$( "#atrocityslider" ).slider({
			value:50,
			min: 0,
			max: 100,
			step: 5,
			slide: function( event, ui ) {
				$( "#atrocityamount" ).val(  ui.value );
			}
		});
		$( "#atrocityamount" ).val( $( "#atrocityslider" ).slider( "value" ) );
	});

//what displays when you click each link?

$(document).ready(function(){
    
	$('#submitbutton').click(tooSoon);
	$('#submitbutton').click(showResults);
	$('#sneakLink').click(showSneak);
	$('#backHome').click(goBack);
    
});


//functions determining window displays
function showResults(){
    $('#toosoontest').hide();
    $('#results').show();
	$('#sneak').hide();
}

function showSneak(){
	$('#toosoontest').hide();
	$('#results').hide();
	$('#sneak').show();
}

function goBack(){
	$('#toosoontest').show();
	$('#results').hide();
	$('#sneak').hide();
}

//create variables for Too Soon Test
var about = $('#about').val();
var amount = $('#amount').val();
var livesAffected = $('#livesAffected').val();
var separation = $('#separation').val();
var timeSince = $('#timeSince').val();

//Too Soon Test
//turns out you can't just multiply/divide variables or anything...hmmmmm
//var result = ( atrocityamount * livesAffected )/(separation * timeSince)
//function tooSoon(atrocityamount, livesAffected, separation, timeSince){


//}



//take values submitted from form and enter into algorithm
//   var $newpost = $('.text').first().clone();
//   $newpost.find(".text_body").html( $("#new_text_body").val() );
//   $newpost.find(".text_time").html( "just now.");
   
   //insert the new post in the page
//   $('#new_text_box').after($newpost);
   
   //then hide the new_post box and re show the new button
//   $('#new_text_box').hide();
//   $('#new_post').show();

if (result >= 1)
{
//code to be executed if the conditions are met	
	document.write("Congratulations! With a Too Soon Quotient of " + result + ", your joke about " + about + "was just soon enough. Keep those jokes comin'!");
}
else {
//code to execute if condition is not true	
	document.write("Woah there. With a Too Soon Quotient of " + result + ", your joke was a bit too soon. Give it some time.");
}





