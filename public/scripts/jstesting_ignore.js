
/*
	functions determining window displays
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
	
	
	what displays when you click each link?

	$(document).ready(function(){

		$('#submitbutton').click(tooSoon);
		$('#submitbutton').click(showResults);
		$('#sneakLink').click(showSneak);
		$('#backHome').click(goBack);

	});


	Too Soon Test
	turns out you can't just multiply/divide variables or anything...hmmmmm
	var result = ( atrocityamount * (livesAffected * 0.4))/(separation * timeSince)
	function tooSoon(atrocityamount, livesAffected, separation, timeSince){


	}	
*/


/*new new new
	
$(function() {
            $('#submitbutton').click(function(e) {
 
                var formData = $('form').serialize();
 
                $.ajax({
                    type: "POST",
                    url: "run.php",
                    data: formData,
                    success: function(d) {
                        console.log(d);
						if (result <= 1)
						{
						//code to be executed if the condition is met	
							$('#result').empty().html("Congratulations! With a Too Soon Quotient of " + result + ", your joke about " + about + "was just soon enough. Keep those jokes comin'! <br /> <a href='/sneak.html' id='sneakLink'>Click here</a> to see how we calculated...");
						}
						else {
						//code to execute if condition is not met	
							$('#result').empty().html("Woah there. With a Too Soon Quotient of " + result + ", your joke was a bit too soon. Give it some time. <br /> <a href='/sneak.html' id='sneakLink'>Click here</a> to see how we calculated...");
						}
                });
                e.preventDefault();
            });
        ]});

*/

