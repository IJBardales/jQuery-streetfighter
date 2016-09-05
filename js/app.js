
$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
  	$('.ryu-ready').hide();
  	$('.ryu-still').show();
  })
  .mousedown(function() {
  	// play hadouken sound
  	$('.ryu-ready').hide();
  	$('.ryu-throwing').show();
  	$('.hadouken').show().animate(
  		{'left': '1020px'},
  		500,
  		function() {
  			$('.hadouken').hide();
  			$('.hadouken').css('left', '609px');
  		});

  	})
  	
  .mouseup(function(){
  	//ryu goes back to his ready position
  	$('.ryu-throwing').hide();
  	$('.ryu-ready').show();
  });
});