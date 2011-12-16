$(document).ready(function(){
    
    //what happens when you click the new crush button?
    $('#new_post').click(insertNewText);
    
    //what happens when you click the submit post button?
    $('#submit_text').click(submitText);
    
    
    //---This code handles the default placeholder text
    $('.defaultText').live('focus', function(){
        if ( $(this).val() === $(this).attr("alt") )
           $(this).val("");
    });  
    $('.defaultText').live('blur', function(){
        if ( $(this).val() === "" )
            $(this).val( $(this).attr("alt") );
    });
    //-- End placeholder code
    
});


//Our insert post function
function insertNewText(){
    //hide the button and show our new post box
    $('#new_post').hide();
    $('#new_text_box').show();
}


//Our submit post function
function submitText(){
    
   //clone an existing post, and set values of the new post
   var $newpost = $('.text').first().clone();
   $newpost.find(".text_body").html( $("#new_text_body").val() );
   $newpost.find(".text_time").html( "just now.");
   
   //insert the new post in the page
   $('#new_text_box').after($newpost);
   
   //then hide the new_post box and re show the new button
   $('#new_text_box').hide();
   $('#new_post').show();

}










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
	
	

$(document).ready(function(){
		$( "#currentslider" ).slider({
			value:5,
			min: 0,
			max: 100,
			step: 5,
			slide: function( event, ui ) {
				$( "#currentamount" ).val(  ui.value );
			}
		});
		$( "#currentamount" ).val( $( "#currentslider" ).slider( "value" ) );
	});