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

//what happens when we click?
$('#submitbutton').click(testSubmit);

function testSubmit(){
	$('#toosoontest').hide();
	$('#results').show();
	$('#sneak').hide();
	runTooSoonTest();
}

//create variables for Too Soon Test
function runTooSoonTest(){
	if ($('#separation').val() === "kevinbacon")
		{var separation = 7;}
	else {var separation = $('#separation').val();}

//is this even a valid way to make this condition? sort of just made this up...slash testing it in the console isn't turning kevinbacon into a 7.

	if ($('.choose').val() === "yes")
		{var laugh = 2;}
	else if ($('.choose').val() === "no")
		{var laugh = 0;}
	else if ($('.choose').val() === "me")
		{var laugh = 1;}

	if ($('.choose').val() === "nazis")
		{var groups = 3;}
	else if ($('.choose').val() === "asians")
		{var groups = 1;}
	else if ($('.choose').val() === "kim")
		{var groups = 1;}
	else if ($('.choose').val() === "occupy")
		{var groups = 2;}
	//need to figure out how to deal with someone who checks multiple groups...

	var atrocityamount = $('#atrocityamount').val();
	var about = $('#about').val();
	var amount = $('#amount').val();
	var livesAffected = $('#livesAffected').val();
	var separation = $('#separation').val();
	var timeSince = $('#timeSince').val();

	var result = ( atrocityamount * (livesAffected * 0.4))/(separation * timeSince * laugh);
//this is a placeholder. actual formula will be different.

	if (result <= 1)
	{
	$('#result').html("Congratulations! With a Too Soon Quotient of " + result + ", your joke about " + about + "was just soon enough. Keep those jokes comin! <br /><span id='sneaklink'>Click here</span> to see how we calculated...");
	}
	else 
	{
	$('#result').html("Woah there. With a Too Soon Quotient of " + result + ", your joke was a bit too soon. Give it some time. <br /><span id='sneaklink'>Click here</span> to see how we calculated...");
	}
}

//functions for other pages
$('#sneaklink').click(showSneak);
$('#homelink').click(goHome);

function showSneak(){
	$('#toosoontest').hide();
	$('#results').hide();
	$('#sneak').show();
}

function goHome(){
	$('#toosoontest').show();
	$('#results').hide();
	$('#sneak').hide();
}




